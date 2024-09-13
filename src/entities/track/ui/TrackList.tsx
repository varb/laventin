import Stack from "shared/ui/Stack";
import TrackItem from "./TrackItem";
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
    <Stack gap={0}>
      {trackList.map((track) => (
        <TrackItem {...track} />
      ))}
    </Stack>
  );
}
