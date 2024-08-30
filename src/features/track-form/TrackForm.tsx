import { FloppyDisk } from "@phosphor-icons/react";
import {
  Control,
  Controller,
  FormProvider,
  SubmitHandler,
  useForm,
  useFormContext,
  useWatch,
} from "react-hook-form";

import { TrackItem } from "entities/track";
import { Button } from "shared/ui";
import TextInput from "shared/ui/TextInput";

import UploadImageForm from "./ui/UploadImageForm";
import StreamingLinksForm from "./ui/StreamingLinksForm";
import { TrackFormData } from "./model/trackForm.types";
import { StyledTrackForm } from "./TrackForm.styles";

interface TrackFormProps {
  onSubmit?: (formData: TrackItem) => void;
}

const defaultFormData: TrackFormData = {
  title: "",
  artist: "Laventin",
  active: true,
  // links: {
  //   soundcloud:
  //     "https://soundcloud.com/laventin/lovely?si=498cb57e15aa4cfd92563d1d2a223345&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  //   apple: "https://music.apple.com/ru/album/lovely/1500734346?i=1500734349",
  // },
  links: [
    {
      resourceId: "apple",
      url: "https://music.apple.com/ru/album/lovely/1500734346?i=1500734349",
    },
  ],
  slug: "",
  coverUrl: "",
  description: "",
  releaseDate: "",
  // createdAt: new Date(),
  // updatedAt: new Date(),
};

const TrackSlug = ({ control }: { control: Control<TrackFormData> }) => {
  const title = useWatch({ control, name: "slug" });

  return <div>track url: {title}</div>;
};

const prepareTrackId = (title: string) => {
  return title
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-zA-Z0-9-]/g, "");
};

const TrackTitleInput = () => {
  const { control, setValue } = useFormContext<TrackFormData>();

  return (
    <Controller
      name="title"
      control={control}
      rules={{ required: true }}
      render={({ field }) => (
        <TextInput
          label="Title"
          placeholder="Eg. Forever"
          {...field}
          onChange={(e) => {
            const { value } = e.target;
            const preparedTrackId = prepareTrackId(value);
            setValue("slug", preparedTrackId);
            field.onChange(value);
          }}
        />
      )}
    />
  );
};

export default function TrackForm({ onSubmit }: TrackFormProps) {
  const formMethods = useForm<TrackFormData>({
    defaultValues: defaultFormData,
  });
  const { control, handleSubmit, formState } = formMethods;

  const onFormSubmit: SubmitHandler<TrackFormData> = (data) => {
    console.log("onFormSubmit", data);
  };

  console.log("render form");

  return (
    <FormProvider {...formMethods}>
      <StyledTrackForm onSubmit={handleSubmit(onFormSubmit)}>
        <TrackTitleInput />

        {/* <div>
        <input type="text" placeholder="slug" value={formData.slug} readOnly />
      </div> */}

        <TrackSlug control={control} />

        <Controller
          name="artist"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextInput label="Artist" placeholder="Eg. Laventin" {...field} />
          )}
        />

        <UploadImageForm label="Artwork" />

        <StreamingLinksForm />

        <Controller
          name="active"
          control={control}
          render={({ field: { value, ...field } }) => (
            <div>
              <label>
                <input type="checkbox" checked={value} {...field} />
                Show track in public list
              </label>
            </div>
          )}
        />

        <Button
          iconLeft={<FloppyDisk />}
          type="submit"
          width="full"
          disabled={!formState.isValid}
        >
          Save new track
        </Button>
      </StyledTrackForm>
    </FormProvider>
  );
}
