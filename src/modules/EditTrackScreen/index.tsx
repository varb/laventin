import CreateOrUpdateTrackForm from "components/CreateOrUpdateTrackForm";
import { Typography } from "design-system";

export default function EditTrackScreen() {
  return (
    <div>
      <Typography.H1>Edit Track</Typography.H1>
      <CreateOrUpdateTrackForm />
    </div>
  );
}
