import { Link } from 'react-router-dom';
import './NotFoundPage.css';

export const NotFoundPage = () => {
  return (
    <>
      <section className="not-found">
        <h2 className="not-found__error">404</h2>
        <p className="not-found__message">Страница не найдена</p>
        <Link to="/" className="not-found__link">
          Назад
        </Link>
      </section>
    </>
  );
};
