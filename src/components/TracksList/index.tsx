import { Link } from "react-router-dom";

import {
  LinksList,
  TrackLink,
  TrackArtist,
  TrackArtwork,
  TrackTitle,
} from "./styles";
import { useTracksList } from "modules/tracks/hooks/useTrackList";
import { RouteNames } from "shared/model/route-names";

interface TracksListProps {}

export default function TracksList() {
  const { data: trackList } = useTracksList();

  console.log("TracksList", trackList);

  if (trackList === null) {
    return null;
  }

  return (
    <LinksList>
      {trackList.map((track) => (
        <TrackLink
          key={track.id}
          to={`${RouteNames.tracks}/${track.id}`}
          as={Link}
        >
          <TrackArtwork src={track.coverUrl || `/art/empty-cover.svg`} />
          <div>
            <TrackTitle>{track.title}</TrackTitle>
            <TrackArtist>{track.artist}</TrackArtist>
          </div>
        </TrackLink>
      ))}
    </LinksList>
  );
}
