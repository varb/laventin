import { useState } from "react";
import { FloppyDisk, Plus } from "@phosphor-icons/react";

import { TrackFormData } from "entities/track";
import { Button, FileButton } from "shared/ui";
import UploadImageForm from "./UploadImageForm";
import { StyledTrackForm } from "./TrackForm.styles";

interface TrackFormProps {
  onSubmit?: (formData: TrackFormData) => void;
}

const defaultFormData: TrackFormData = {
  id: "",
  title: "",
  artist: "Laventin",
  active: true,
  links: {},
  slug: "",
  coverUrl: "",
  description: "",
  createdAt: new Date(),
  updatedAt: new Date(),
  releaseDate: new Date(),
};

export default function TrackForm({ onSubmit }: TrackFormProps) {
  const [formData, setFormData] = useState<TrackFormData>(defaultFormData);

  // const storage = getStorage();
  // console.log(storage);

  const onFormSubmit = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  const onTitleChange = (e: React.BaseSyntheticEvent) => {
    const title = e.target.value;
    const slug = title
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-zA-Z0-9-]/g, "");

    setFormData({ ...formData, title, slug, id: slug });
  };

  return (
    <StyledTrackForm onSubmit={onFormSubmit}>
      <div>
        <input
          type="text"
          placeholder="title"
          value={formData.title}
          onChange={onTitleChange}
        />
      </div>

      <div>
        <input type="text" placeholder="slug" value={formData.slug} readOnly />
      </div>

      <div>track url: {formData.slug}</div>

      <div>
        <input
          type="text"
          placeholder="artist"
          value={formData.artist}
          onChange={(e) => setFormData({ ...formData, artist: e.target.value })}
        />
      </div>

      <UploadImageForm label="Artwork" />

      <div>
        Streaming links
        <Button variant="outlined" iconLeft={<Plus />} width="full">
          Add new link
        </Button>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={formData.active}
            onChange={(e) =>
              setFormData({ ...formData, active: e.target.checked })
            }
          />
          Show track in public list
        </label>
      </div>

      <Button iconLeft={<FloppyDisk />} type="submit" width="full">
        Save new track
      </Button>
    </StyledTrackForm>
  );
}
