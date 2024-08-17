import React from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "shared/providers";

export default function LoginForm() {
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const onSubmit = async (e: React.BaseSyntheticEvent) => {
    e.preventDefault();

    const formElements = e.target.elements as HTMLFormControlsCollection &
      Record<string, HTMLInputElement>;
    const email = formElements.email.value;
    const password = formElements.password.value;

    await signIn(email, password);
    navigate("/");
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        <input type="email" name="email" id="email" placeholder="email" />
      </label>
      <label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />
      </label>
      <div>
        <button type="submit">Войти</button>
      </div>
    </form>
  );
}
