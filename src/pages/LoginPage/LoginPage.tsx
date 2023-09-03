import { paths } from '../../utils';
import {
  Auth,
  AuthBottomControls,
  Fieldset,
  Form,
  Input,
  Label,
} from '../../components';
import './LoginPage.css';

export const LoginPage = () => {
  return (
    <Auth title="Рады видеть">
      <Form>
        <Fieldset>
          <Label htmlFor="email" text="E-mail" />
          <Input type="email" id="email" />
        </Fieldset>
        <Fieldset>
          <Label htmlFor="password" text="Пароль" />
          <Input type="password" id="password" />
        </Fieldset>
        <AuthBottomControls
          submitText="Войти"
          question="Ещё не зарегистрированы?"
          to={paths.signup}
          linkText="Регистрация"
        />
      </Form>
    </Auth>
  );
};
