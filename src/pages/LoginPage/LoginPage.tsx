import { paths } from '../../utils';
import {
  Auth,
  AuthBottomControls,
  ErrorMessage,
  Fieldset,
  Form,
  Input,
  Label,
} from '../../components';
import './LoginPage.css';
import { useValidation } from 'src/hooks';
import { FormEvent, useEffect } from 'react';

export const LoginPage = () => {
  const { values, errors, isValid, resetForm, handleChange } = useValidation();

  useEffect(() => {
    resetForm({ email: '', password: '' }, { email: '', password: '' });
  }, [resetForm]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <Auth title="Рады видеть!">
      <Form className="form_type_login" onSubmit={handleSubmit}>
        <Fieldset>
          <Label htmlFor="email" text="E-mail" />
          <Input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={values.email || ''}
            minLength={5}
            placeholder="E-mail"
          />
          {Boolean(errors.email) && <ErrorMessage message={errors.email} />}
        </Fieldset>
        <Fieldset>
          <Label htmlFor="password" text="Пароль" />
          <Input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            value={values.password || ''}
            minLength={8}
            placeholder="Пароль"
          />
          {Boolean(errors.password) && (
            <ErrorMessage message={errors.password} />
          )}
        </Fieldset>
        <AuthBottomControls
          submitText="Войти"
          question="Ещё не зарегистрированы?"
          to={paths.signup}
          linkText="Регистрация"
          isValid={isValid}
        />
      </Form>
    </Auth>
  );
};
