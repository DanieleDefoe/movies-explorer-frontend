import {
  CurrentUserContext,
  DataContext,
  DataContextValues,
} from '../../contexts';
import { ProfileData } from '../../components';
import { useContext, useEffect } from 'react';
import './ProfilePage.css';
import { User, paths } from '../../utils';
import { useNavigate } from 'react-router-dom';

export const ProfilePage = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(DataContext) as DataContextValues;
  const user = useContext(CurrentUserContext) as User;

  useEffect(() => {
    if (!isLoggedIn) {
      return navigate(paths.root, {
        replace: true,
      });
    }
  }, [isLoggedIn]);

  return (
    <section className="profile">
      <ProfileData name={user?.name} />
    </section>
  );
};
