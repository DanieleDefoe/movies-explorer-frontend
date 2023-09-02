import { Outlet } from 'react-router-dom';
import './SimpleLayout.css';

export const SimpleLayout = () => {
  return (
    <section className="simple-layout">
      <Outlet />
    </section>
  );
};
