import './RegisterPage.css';
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
import { useValidation } from '../../hooks';
import { FormEvent, useEffect } from 'react';

export const RegisterPage = () => {
  const { values, errors, isValid, handleChange, resetForm } = useValidation();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  useEffect(() => {
    resetForm(
      { name: '', email: '', password: '' },
      { name: '', email: '', password: '' },
    );
  }, [resetForm]);

  return (
    <Auth title="Добро пожаловать!">
      <Form className="form_type_register" onSubmit={handleSubmit}>
        <Fieldset>
          <Label text="Имя" htmlFor="name" />
          <Input
            onChange={handleChange}
            type="text"
            id="name"
            name="name"
            value={values.name || ''}
            minLength={2}
            maxLength={30}
          />
          {Boolean(errors.name) && <ErrorMessage message={errors.name} />}
        </Fieldset>
        <Fieldset>
          <Label text="E-mail" htmlFor="email" />
          <Input
            onChange={handleChange}
            type="email"
            id="email"
            name="email"
            value={values.email || ''}
            minLength={5}
          />
          {Boolean(errors.email) && <ErrorMessage message={errors.email} />}
        </Fieldset>
        <Fieldset>
          <Label text="Пароль" htmlFor="password" />
          <Input
            onChange={handleChange}
            type="password"
            id="password"
            name="password"
            value={values.password || ''}
            minLength={8}
          />
          {Boolean(errors.password) && (
            <ErrorMessage message={errors.password} />
          )}
        </Fieldset>
        <AuthBottomControls
          submitText="Зарегистрироваться"
          question="Уже зарегистрированы?"
          to={paths.signin}
          linkText="Войти"
          isValid={isValid}
        />
      </Form>
    </Auth>
  );
};
