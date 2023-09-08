import { FC, useEffect, useRef } from 'react';
import './ProfileForm.css';
import { ProfileFormProps } from './lib/types';
import { ErrorMessage } from '..';

export const ProfileForm: FC<ProfileFormProps> = ({
  isEditing,
  validation,
}) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const { values, errors, handleChange } = validation;

  useEffect(() => {
    if (isEditing) {
      nameRef.current?.focus();
    }
  }, [isEditing]);

  return (
    <form className="profile-form">
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
          minLength={2}
          ref={nameRef}
          placeholder="Имя"
          required
        />
      </fieldset>
      {Boolean(errors.name) && (
        <ErrorMessage
          className="error-message_type_profile"
          message={errors.name}
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
          onChange={handleChange}
          minLength={5}
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
    </form>
  );
};
