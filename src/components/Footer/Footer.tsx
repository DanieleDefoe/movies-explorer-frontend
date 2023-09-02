import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <h6 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h6>
      <hr className="footer__divider" />
      <address className="footer__basement">
        <p className="footer__date">&copy; {new Date().getFullYear()}</p>
        <ul className="footer__links">
          <li>
            <a
              className="footer__link"
              href="https://practicum.yandex.ru"
              rel="noreferrer noopener nofollow"
            >
              Яндекс Практикум
            </a>
          </li>
          <li>
            <a
              className="footer__link"
              href="https://github.com/DanieleDefoe"
              rel="noreferrer noopener nofollow"
            >
              Github
            </a>
          </li>
        </ul>
      </address>
    </footer>
  );
};
