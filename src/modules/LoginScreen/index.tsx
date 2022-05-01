import React from 'react'
import { useNavigate } from 'react-router';

import { PageWrap } from 'components/Layout/styles';
import { H1 } from 'components/Typography';
import { useAuth } from 'providers/AuthProvider';

export default function LoginScreen() {
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const onSubmit = async (e: React.BaseSyntheticEvent) => {
    e.preventDefault();

    const formElements = e.target.elements as HTMLFormControlsCollection & Record<string, HTMLInputElement>;
    const email = formElements.email.value;
    const password = formElements.password.value;

    await signIn(email, password);
    navigate('/');
  };

  return (
    <PageWrap>
      <form onSubmit={onSubmit}>
        <H1>Login</H1>
        <div>
          <input type="email" name="email" id="email" placeholder='email' />
        </div>
        <div>
          <input type="password" name="pass" id="password" placeholder='password' />
        </div>
        <div>
          <button type="submit">Войти</button>
        </div>
      </form>
    </PageWrap>
  )
}
