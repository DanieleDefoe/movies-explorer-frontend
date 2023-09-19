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
import { FormEvent, useEffect, useContext } from 'react';
import { DataContext, DataContextValues } from '../../contexts';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const {
    signup,
    isSearchLoading,
    isLoggedIn,
    setPopupMessage,
    setPopupOpen,
    setPopupType,
  } = useContext(DataContext) as DataContextValues;

  const { values, errors, isValid, handleChange, resetForm } = useValidation();

  useEffect(() => {
    if (isLoggedIn) {
      navigate(searchParams.get('redirectTo') || paths.root, {
        replace: true,
      });
    }
  }, [isLoggedIn]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const { name, email, password } = values;
      const res = await signup(name, email, password);
      if (res) {
        setPopupType('success');
        setPopupMessage('Вы успешно зарегистрировались!');
        setPopupOpen(true);
        navigate(paths.signin, { replace: true });
      }
    } catch (err) {
      console.log(err);
    }
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
            placeholder="Имя"
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
            maxLength={50}
            placeholder="E-mail"
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
            placeholder="Пароль"
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
          isValid={isValid && !isSearchLoading}
        />
      </Form>
    </Auth>
  );
};
