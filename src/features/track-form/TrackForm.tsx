import {
  CalendarStar,
  FloppyDisk,
  LinkSimple,
  LinkSimpleBreak,
} from "@phosphor-icons/react";
import {
  Control,
  Controller,
  FormProvider,
  SubmitHandler,
  useForm,
  useFormContext,
} from "react-hook-form";

import { TrackItem } from "entities/track";
import Button from "shared/ui/Button";
import TextInput from "shared/ui/TextInput";
import Stack from "shared/ui/Stack";

import UploadImageForm from "./ui/UploadImageForm";
import StreamingLinksForm from "./ui/StreamingLinksForm";
import { TrackFormData } from "./model/trackForm.types";

interface TrackFormProps {
  onSubmit?: (formData: TrackItem) => void;
}

const defaultFormData: TrackFormData = {
  title: "",
  artist: "Laventin",
  active: true,
  links: [{ resourceId: "", url: "" }],
  slug: "",
  coverUrl: "",
  description: "",
  releaseDate: "",
  // createdAt: new Date(),
  // updatedAt: new Date(),
};

const prepareTrackId = (title: string) => {
  return title
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-zA-Z0-9-]/g, "");
};

const TrackTitleInput = () => {
  const { control, setValue, formState } = useFormContext<TrackFormData>();

  return (
    <Controller
      name="title"
      control={control}
      rules={{ required: true }}
      render={({ field }) => (
        <TextInput
          label="Title"
          placeholder="Eg. Forever"
          autoFocus
          {...field}
          onChange={(e) => {
            const { value } = e.target;
            const preparedTrackId = prepareTrackId(value);
            if (!formState.dirtyFields.slug) {
              setValue("slug", preparedTrackId);
            }
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

  console.log("render form", formState);

  return (
    <FormProvider {...formMethods}>
      <Stack forwardedAs="form" onSubmit={handleSubmit(onFormSubmit)} gap={2.5}>
        <TrackTitleInput />

        <Controller
          name="slug"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextInput
              label="Permalink"
              leadingText="lavent.in/tracks/"
              placeholder="Eg. forever"
              rightSlot={
                !formState.dirtyFields.slug ? (
                  <LinkSimple />
                ) : (
                  <LinkSimpleBreak />
                )
              }
              {...field}
            />
          )}
        />

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
          name="releaseDate"
          control={control}
          render={({ field }) => (
            <TextInput
              label="Release Date"
              placeholder="Eg. 12.10.2024"
              leftSlot={<CalendarStar />}
              {...field}
            />
          )}
        />

        <Controller
          name="active"
          control={control}
          render={({ field: { value, ...field } }) => (
            <div>
              <label>
                <input type="checkbox" checked={value} {...field} />
                Show track on home page
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
      </Stack>
    </FormProvider>
  );
}
