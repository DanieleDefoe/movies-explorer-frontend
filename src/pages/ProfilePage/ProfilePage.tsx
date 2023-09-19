import {
  CurrentUserContext,
  DataContext,
  DataContextValues,
} from '../../contexts';
import { ProfileData } from '../../components';
import { useContext, useEffect, useLayoutEffect } from 'react';
import './ProfilePage.css';
import { User, paths } from '../../utils';
import { useLocation, useNavigate } from 'react-router-dom';

export const ProfilePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn } = useContext(DataContext) as DataContextValues;
  const user = useContext(CurrentUserContext) as User;

  useEffect(() => {
    const currentLocation = location.pathname;

    if (!isLoggedIn) {
      return navigate(`${paths.signin}?redirectTo=${currentLocation}`, {
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
