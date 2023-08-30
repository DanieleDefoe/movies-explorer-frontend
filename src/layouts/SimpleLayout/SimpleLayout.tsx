import { Outlet } from 'react-router-dom';
import './SimpleLayout.css';

export const SimpleLayout = () => {
  return (
    <section>
      simple layout <Outlet />
    </section>
  );
};
