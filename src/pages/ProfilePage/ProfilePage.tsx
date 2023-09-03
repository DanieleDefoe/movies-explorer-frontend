import './ProfilePage.css';

export const ProfilePage = () => {
  return (
    <section className="profile">
      <div className="profile__data">
        <h2 className="profile__greeting">Привет, Абузар!</h2>
        <form className="profile__form">
          <fieldset className="profile__info">
            <label htmlFor="name" className="profile__label">
              Имя
            </label>
            <input
              className="profile__input"
              value="Абузар"
              disabled={true}
              id="name"
            />
          </fieldset>
          <hr className="profile__divider" />
          <fieldset className="profile__info">
            <label htmlFor="email" className="profile__label">
              E-mail
            </label>
            <input
              className="profile__input"
              value="abuzar.mamedov@yandex.ru"
              disabled={true}
              id="email"
            />
          </fieldset>
          <div className="profile__buttons">
            <button className="profile__edit" type="button">
              Редактировать
            </button>
            <button className="profile__signout" type="button">
              Выйти из аккаунта
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
