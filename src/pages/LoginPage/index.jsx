import React from 'react';
import Button from '../../components/button';
import Logo from '../../components/logo';
import {
  Container,
  Content,
  LoginMessage,
  LoginForm,
  Form,
  FormTitle,
  LoginInput,
  Buttons,
  Slogan,
  LinkPass,
} from './styles';

export default function LoginPage() {
  return (
    <Container>
      <Content>
        <LoginMessage>
          <Logo />
          <Slogan>Bring everyone together to build better products.</Slogan>
        </LoginMessage>
        <LoginForm>
          <Form>
            <FormTitle>User Login</FormTitle>
            <LoginInput type="text" id="username" name="username" placeholder="User Name" />
            <LoginInput type="password" id="password" name="password" placeholder="Password" />
            <Buttons>
              <Button to='/' text="Login" />
              <Button to='/' text="Sign Up" bg="var(--secondary-color)" />
            </Buttons>
            <LinkPass href="/">Forgot your password?</LinkPass>
          </Form>
        </LoginForm>
      </Content>
    </Container>
  );
}
