import { useState } from "react";
import { getStorage } from "firebase/storage";
import { TrackFormData } from "modules/tracks/model/tracklist";

interface CreateOrUpdateTrackFormProps {
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

export default function CreateOrUpdateTrackForm({
  onSubmit,
}: CreateOrUpdateTrackFormProps) {
  const [formData, setFormData] = useState<TrackFormData>(defaultFormData);

  const storage = getStorage();
  console.log(storage);

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
    <form onSubmit={onFormSubmit}>
      <div>
        <input
          type="text"
          placeholder="title"
          value={formData.title}
          onChange={onTitleChange}
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="artist"
          value={formData.artist}
          onChange={(e) => setFormData({ ...formData, artist: e.target.value })}
        />
      </div>

      <div>
        <input type="text" placeholder="slug" value={formData.slug} />
      </div>

      <div>track url: {formData.slug}</div>

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
      <button type="submit">Add new</button>
    </form>
  );
}
