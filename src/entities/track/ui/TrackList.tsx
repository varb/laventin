import Stack from "shared/ui/Stack";
import TrackItem from "./TrackItem";
import { TrackItem as ITrackItem } from "../model/track.types";

type TrackListProps = {
  dataList?: ITrackItem[] | null;
};

export default function TrackList({ dataList }: TrackListProps) {
  if (!dataList) return null;

  return (
    <Stack gap={0}>
      {dataList.map((track) => (
        <TrackItem key={track.id} {...track} />
      ))}
    </Stack>
  );
}
