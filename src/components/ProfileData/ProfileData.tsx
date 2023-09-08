import { FC, useState, useEffect } from 'react';

import { ProfileForm, Submit } from '..';
import { ProfileDataProps } from './lib/types';

import './ProfileData.css';
import { useValidation } from '../../hooks';

export const ProfileData: FC<ProfileDataProps> = ({ name }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const validation = useValidation();

  function startEditing() {
    setIsEditing(true);
  }

  function stopEditing() {
    setIsEditing(false);
  }

  useEffect(() => {
    validation.resetForm(
      { name: 'Андрей', email: 'abuzar@mamedov@yandex.ru' },
      { name: '', email: '' },
      true,
    );
  }, []);

  return (
    <div className="profile__data">
      <h2 className="profile__greeting">Привет, {name}!</h2>
      <ProfileForm isEditing={isEditing} validation={validation} />
      <div className="profile__buttons">
        {isEditing ? (
          <Submit
            text="сохранить"
            onClick={stopEditing}
            isValid={validation.isValid}
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
            <button className="profile__signout" type="button">
              Выйти из аккаунта
            </button>
          </>
        )}
      </div>
    </div>
  );
};
