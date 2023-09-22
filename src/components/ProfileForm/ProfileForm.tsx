import { FC, FormEvent, useContext, useEffect, useRef } from 'react';
import './ProfileForm.css';
import { ProfileFormProps } from './lib/types';
import { ErrorMessage, Submit } from '..';
import {
  CurrentUserContext,
  DataContext,
  DataContextValues,
} from '../../contexts';
import { EMAIL_REGEX, User } from '../../utils';

export const ProfileForm: FC<ProfileFormProps> = ({
  isEditing,
  validation,
  stopEditing,
  startEditing,
  handleSignoutClick,
}) => {
  const user = useContext(CurrentUserContext) as User;
  const { updateUserData, isSearchLoading } = useContext(
    DataContext,
  ) as DataContextValues;
  const nameRef = useRef<HTMLInputElement>(null);
  const { values, errors, handleChange } = validation;

  useEffect(() => {
    if (isEditing) {
      nameRef.current?.focus();
    }
  }, [isEditing]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      await updateUserData(values.name, values.email);
    } catch (err) {
      console.log(err);
    } finally {
      stopEditing();
    }
  }

  return (
    <form className="profile-form" onSubmit={handleSubmit}>
      <fieldset className="profile-form__info">
        <label htmlFor="name" className="profile-form__label">
          Имя
        </label>
        <input
          className="profile-form__input"
          value={values.name || ''}
          disabled={!isEditing}
          id="name"
          name="name"
          type="text"
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+[\s\-]*[a-zA-Zа-яА-Я]+$"
          minLength={2}
          maxLength={30}
          ref={nameRef}
          placeholder="Имя"
          required
        />
      </fieldset>
      {Boolean(errors.name) && (
        <ErrorMessage
          className="error-message_type_profile"
          message={
            'Введите данные в указанном формате [A-Z, a-z, А - Я, а-я, Пробел, -]'
          }
        />
      )}
      <hr className="profile-form__divider" />
      <fieldset className="profile-form__info">
        <label htmlFor="email" className="profile-form__label">
          E-mail
        </label>
        <input
          className="profile-form__input"
          value={values.email || ''}
          disabled={!isEditing}
          id="email"
          name="email"
          pattern="^[\w.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,}$"
          onChange={handleChange}
          minLength={5}
          maxLength={50}
          type="email"
          placeholder="E-mail"
          required
        />
      </fieldset>
      {Boolean(errors.email) && (
        <ErrorMessage
          className="error-message_type_profile"
          message={errors.email}
        />
      )}
      <div className="profile__buttons">
        {isEditing ? (
          <Submit
            text="сохранить"
            isValid={
              validation.isValid &&
              !isSearchLoading &&
              (values.email !== user.email || values.name !== user.name)
            }
          />
        ) : (
          <>
            <button
              className="profile__edit"
              type="button"
              onClick={startEditing}
            >
              Редактировать
            </button>
            <button
              className="profile__signout"
              type="button"
              onClick={handleSignoutClick}
            >
              Выйти из аккаунта
            </button>
          </>
        )}
      </div>
    </form>
  );
};
