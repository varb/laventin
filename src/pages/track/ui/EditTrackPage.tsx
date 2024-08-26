import CreateOrUpdateTrackForm from "components/CreateOrUpdateTrackForm";
import { Typography } from "shared/ui";

export default function EditTrackPage() {
  return (
    <div>
      <Typography.H1>Edit Track</Typography.H1>
      <CreateOrUpdateTrackForm />
    </div>
  );
}
