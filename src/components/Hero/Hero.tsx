import { images } from '../../images';

import './Hero.css';

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__info">
        <h1 className="hero__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <p className="hero__subtitle">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <a href="#about" className="hero__link">
          Узнать больше
        </a>
      </div>
      <img src={images.hero} alt="глобус" className="hero__image" />
    </section>
  );
};
