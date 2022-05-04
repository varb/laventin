import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";

import { trackList } from 'data/tracklist';
import {
  LinksList,
  TrackLink,
  TrackArtist,
  TrackArtwork,
  TrackTitle,
} from './styles';
import { firebaseDB } from 'network/firebase';

const activeTrackList = trackList.filter((item) => item.active);

interface TracksListProps {
}

export default function TracksList() {
  const [ trackList, setTrackList ] = useState<any[] | null>(null);

  // const database = getDatabase();
  // const starCountRef = ref(database, 'posts/' + postId + '/starCount');
  // onValue(starCountRef, (snapshot) => {
  //   const data = snapshot.val();
  //   updateStarCount(postElement, data);
  // });

  useEffect(() => {
    const fetchTracks = async () => {
      let list: any = [];

      try {
        const querySnapshot = await getDocs(collection(firebaseDB, "tracks"));
        querySnapshot.forEach((doc) => {
          list.push({
            id: doc.id,
            ...doc.data()
          });
        });

        setTrackList(list);
      } catch (e) {
        console.error(e);
      }
    }

    fetchTracks();
  }, []);

  console.log('TracksList', trackList);

  if (trackList === null) {
    return null;
  }

  return (
    <LinksList>
      {trackList.map((track) => (
        <TrackLink
          key={track.id}
          to={`/t/${track.id}`}
          as={Link}
        >
          <TrackArtwork src={track.coverUrl} />
          <div>
            <TrackTitle>{track.title}</TrackTitle>
            <TrackArtist>{track.artist}</TrackArtist>
          </div>
        </TrackLink>
      ))}
      {activeTrackList.map((track) => (
        <TrackLink
          key={track.id}
          to={`/t/${track.id}`}
          as={Link}
        >
          <TrackArtwork src={`/art/${track.id}/artwork.jpg`} />
          <div>
            <TrackTitle>{track.name}</TrackTitle>
            <TrackArtist>{track.artist}</TrackArtist>
          </div>
        </TrackLink>
      ))}
    </LinksList>
  )
}
