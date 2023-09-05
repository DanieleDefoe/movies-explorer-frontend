import { FC } from 'react';

import { ProfileForm } from '..';
import { ProfileDataProps } from './lib/types';

import './ProfileData.css';

export const ProfileData: FC<ProfileDataProps> = ({ name }) => {
  return (
    <div className="profile__data">
      <h2 className="profile__greeting">Привет, {name}!</h2>
      <ProfileForm />
      <div className="profile-form__buttons">
        <button className="profile-form__edit" type="button">
          Редактировать
        </button>
        <button className="profile-form__signout" type="button">
          Выйти из аккаунта
        </button>
      </div>
    </div>
  );
};
