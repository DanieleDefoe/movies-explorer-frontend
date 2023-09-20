import { useNavigate } from 'react-router-dom';
import './NotFoundPage.css';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return (
    <>
      <section className="not-found">
        <h2 className="not-found__error">404</h2>
        <p className="not-found__message">Страница не найдена</p>
        <button className="not-found__link" onClick={goBack}>
          Назад
        </button>
      </section>
    </>
  );
};
