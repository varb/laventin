import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { Plus, Trash } from "@phosphor-icons/react";

import { Button, IconButton, Stack, Typography } from "shared/ui";
import { TrackFormData } from "../model/trackForm.types";
import TextInput from "shared/ui/TextInput";
import {
  getResourceIdFromLink,
  getStreamingLinkIcon,
  MusicStoresEnum,
} from "entities/streaming-link";

type StreamingLinksFormProps = {};

// const StreamingLinkInput = () => {
//   const { control, setValue } = useFormContext<TrackFormData>();

//   return (
//     <TextInput
//       leftSlot={getStreamingLinkIcon(
//         item.resourceId as MusicStoresEnum
//       )}
//       placeholder="https://"
//       rightSlot={
//         <IconButton
//           variant="ghost"
//           icon={<Trash />}
//           onClick={() => remove(index)}
//         />
//       }
//       {...field}
//       onChange={(e) => {
//         const { value } = e.target;
//         const resourceFromLink = getResourceIdFromLink(value);
//         setValue(`links.${index}.resourceId`, resourceFromLink, {shouldTouch:true});
//         field.onChange(value);
//       }}
//     />
//   )
// }

export default function StreamingLinksForm({}: StreamingLinksFormProps) {
  const { control, setValue, trigger } = useFormContext<TrackFormData>();
  const { fields, append, remove, update } = useFieldArray({
    control,
    name: "links",
  });

  console.log("linksList", fields);

  return (
    <Stack gap={0.5}>
      <Typography.Label>Streaming links</Typography.Label>
      <Stack gap={1.5}>
        {fields?.map((item, index) => (
          <Controller
            key={item.id}
            name={`links.${index}.url`}
            control={control}
            render={({ field }) => (
              <TextInput
                leftSlot={getStreamingLinkIcon(
                  item.resourceId as MusicStoresEnum
                )}
                placeholder="https://"
                rightSlot={
                  <IconButton
                    variant="ghost"
                    icon={<Trash />}
                    onClick={() => remove(index)}
                  />
                }
                {...field}
                onChange={(e) => {
                  const { value } = e.target;
                  const resourceFromLink = getResourceIdFromLink(value);
                  setValue(
                    `links.${index}`,
                    { url: value, resourceId: resourceFromLink },
                    {
                      shouldDirty: true,
                      shouldTouch: true,
                    }
                  );
                  // field.onChange(value);
                }}
              />
            )}
          />
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
