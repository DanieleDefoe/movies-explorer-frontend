import { FC, useState, useEffect, useContext } from 'react';

import { ProfileForm, Submit } from '..';
import { ProfileDataProps } from './lib/types';

import './ProfileData.css';
import { useValidation } from '../../hooks';
import {
  CurrentUserContext,
  DataContext,
  DataContextValues,
} from '../../contexts';
import { useNavigate } from 'react-router-dom';
import { User, paths } from '../../utils';

export const ProfileData: FC<ProfileDataProps> = ({ name }) => {
  const navigate = useNavigate();
  const { signout } = useContext(DataContext) as DataContextValues;
  const user = useContext(CurrentUserContext) as User;
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const validation = useValidation();

  function startEditing() {
    setIsEditing(true);
  }

  function stopEditing() {
    setIsEditing(false);
  }

  async function handleSignoutClick() {
    try {
      await signout();
      navigate(paths.root, { replace: true });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    validation.resetForm(
      { name: user?.name, email: user?.email },
      { name: '', email: '' },
      true,
    );
  }, [user]);

  return (
    <div className="profile__data">
      <h2 className="profile__greeting">Привет, {name}!</h2>
      <ProfileForm
        isEditing={isEditing}
        validation={validation}
        startEditing={startEditing}
        stopEditing={stopEditing}
        handleSignoutClick={handleSignoutClick}
      />
    </div>
  );
};
