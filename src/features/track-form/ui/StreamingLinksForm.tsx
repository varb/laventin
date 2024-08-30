import {
  Controller,
  FieldArrayWithId,
  useFieldArray,
  useFormContext,
  useWatch,
} from "react-hook-form";
import { Plus, Trash } from "@phosphor-icons/react";

import { Button, IconButton, Stack, Typography } from "shared/ui";
import { TrackFormData } from "../model/trackForm.types";
import TextInput from "shared/ui/TextInput";
import {
  getResourceIdFromLink,
  getStreamingLinkIcon,
  MusicStoresEnum,
} from "entities/streaming-link";

type StreamingLinkInputProps = {
  index: number;
  item: FieldArrayWithId<TrackFormData, "links", "id">;
};

const StreamingLinkInput = ({ index, item }: StreamingLinkInputProps) => {
  const { control, setValue } = useFormContext<TrackFormData>();
  const { links } = useWatch({ control });
  const { remove } = useFieldArray({
    control,
    name: "links",
  });

  if (!links) return null;

  const currentStreamingLink = links[index];
  const streamingIcon = getStreamingLinkIcon(
    currentStreamingLink.resourceId as MusicStoresEnum
  );

  return (
    <Controller
      key={item.id}
      name={`links.${index}.url`}
      control={control}
      render={({ field }) => (
        <TextInput
          leftSlot={streamingIcon}
          placeholder="https://"
          {...(!(index === links.length - 1 && !currentStreamingLink.url) && {
            rightSlot: (
              <IconButton
                variant="ghost"
                icon={<Trash />}
                onClick={() => remove(index)}
              />
            ),
          })}
          {...field}
          onChange={(e) => {
            const { value } = e.target;
            const resourceFromLink = getResourceIdFromLink(value);

            setValue(`links.${index}`, {
              url: value,
              resourceId: resourceFromLink,
            });
          }}
        />
      )}
    />
  );
};

export default function StreamingLinksForm() {
  const { control } = useFormContext<TrackFormData>();
  const { fields, append } = useFieldArray({
    control,
    name: "links",
  });

  return (
    <Stack gap={0.5}>
      <Typography.Label>Streaming links</Typography.Label>
      <Stack gap={1.5}>
        {fields?.map((item, index) => (
          <StreamingLinkInput key={item.id} index={index} item={item} />
        ))}

        <Button
          variant="outlined"
          iconLeft={<Plus />}
          width="full"
          onClick={() => append({ url: "", resourceId: "" })}
        >
          Add new link
        </Button>
      </Stack>
    </Stack>
  );
}
