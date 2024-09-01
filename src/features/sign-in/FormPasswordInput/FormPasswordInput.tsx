import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Eye, EyeSlash, Password } from "@phosphor-icons/react";

import IconButton from "shared/ui/IconButton";
import TextInput from "shared/ui/TextInput";
import { LoginFormData } from "../model";

export default function FormPasswordInput() {
  const { control } = useFormContext<LoginFormData>();
  const [type, setType] = useState<"password" | "text">("password");

  const toggleType = () => {
    setType((prev) => (prev === "password" ? "text" : "password"));
  };

  return (
    <Controller
      name="password"
      control={control}
      rules={{ required: true }}
      render={({ field }) => (
        <TextInput
          label="Password"
          type={type}
          placeholder="12345678"
          leftSlot={<Password />}
          rightSlot={
            <IconButton
              variant="ghost"
              icon={type === "password" ? <Eye /> : <EyeSlash />}
              onClick={toggleType}
            />
          }
          {...field}
        />
      )}
    />
  );
}
