import { Hero, About, Technologies, Student } from '../../components';

import './MainPage.css';

export const MainPage = () => {
  return (
    <section className="main-page">
      <Hero />
      <About />
      <Technologies />
      <Student />
    </section>
  );
};
