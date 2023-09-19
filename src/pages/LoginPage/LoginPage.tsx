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
import { FormEvent, useEffect, useContext } from 'react';
import { DataContext, DataContextValues } from '../../contexts';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const LoginPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const {
    signin,
    isSearchLoading,
    isLoggedIn,
    setPopupOpen,
    setPopupMessage,
    setPopupType,
  } = useContext(DataContext) as DataContextValues;
  const { values, errors, isValid, resetForm, handleChange } = useValidation();

  useEffect(() => {
    if (isLoggedIn) {
      navigate(searchParams.get('redirectTo') || paths.root, {
        replace: true,
      });
    }
    resetForm({ email: '', password: '' }, { email: '', password: '' });
  }, [resetForm, isLoggedIn]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { email, password } = values;
    try {
      const data = await signin(email, password);
      if (data?._id) {
        setPopupType('success');
        setPopupMessage('Успешных вход в аккаунт');
        setPopupOpen(true);
        navigate(searchParams.get('redirectTo') || paths.movies, {
          replace: true,
        });
      }
    } catch (err) {
      console.log(err);
    }
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
            maxLength={50}
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
            maxLength={30}
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
          isValid={isValid && !isSearchLoading}
        />
      </Form>
    </Auth>
  );
};
