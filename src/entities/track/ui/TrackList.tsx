import { Link } from "react-router-dom";

import { RouteNames } from "shared/model/route-names";
import {
  LinksList,
  TrackLink,
  TrackArtist,
  TrackArtwork,
  TrackTitle,
} from "./TrackList.styles";
import { useTrackList } from "../lib/useTrackList";

type TrackListProps = {
  limit?: number;
};

export default function TrackList({ limit }: TrackListProps) {
  const { data: trackList } = useTrackList({ limit });

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
