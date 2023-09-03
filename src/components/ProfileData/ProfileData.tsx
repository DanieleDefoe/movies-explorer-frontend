import { FC } from 'react';

import { ProfileForm } from '..';
import { ProfileDataProps } from './lib/types';

export const ProfileData: FC<ProfileDataProps> = ({ name }) => {
  return (
    <div className="profile__data">
      <h2 className="profile__greeting">Привет, {name}!</h2>
      <ProfileForm />
    </div>
  );
};
