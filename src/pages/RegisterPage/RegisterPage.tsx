import './RegisterPage.css';
import { paths } from '../../utils';
import {
  Auth,
  AuthBottomControls,
  Fieldset,
  Form,
  Input,
  Label,
} from '../../components';

export const RegisterPage = () => {
  return (
    <Auth title="Добро пожаловать!">
      <Form>
        <Fieldset>
          <Label text="Имя" htmlFor="name" />
          <Input type="text" id="name" />
        </Fieldset>
        <Fieldset>
          <Label text="E-mail" htmlFor="email" />
          <Input type="email" id="email" />
        </Fieldset>
        <Fieldset>
          <Label text="Пароль" htmlFor="password" />
          <Input type="password" id="password" />
        </Fieldset>
        <AuthBottomControls
          submitText="Зарегистрироваться"
          question="Уже зарегистрированы?"
          to={paths.signin}
          linkText="Войти"
        />
      </Form>
    </Auth>
  );
};
