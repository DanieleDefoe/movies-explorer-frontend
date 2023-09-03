import './ProfileForm.css';

export const ProfileForm = () => {
  return (
    <form className="profile-form">
      <fieldset className="profile-form__info">
        <label htmlFor="name" className="profile-form__label">
          Имя
        </label>
        <input
          className="profile-form__input"
          value="Абузар"
          disabled={true}
          id="name"
        />
      </fieldset>
      <hr className="profile-form__divider" />
      <fieldset className="profile-form__info">
        <label htmlFor="email" className="profile-form__label">
          E-mail
        </label>
        <input
          className="profile-form__input"
          value="abuzar.mamedov@yandex.ru"
          disabled={true}
          id="email"
        />
      </fieldset>
      <div className="profile-form__buttons">
        <button className="profile-form__edit" type="button">
          Редактировать
        </button>
        <button className="profile-form__signout" type="button">
          Выйти из аккаунта
        </button>
      </div>
    </form>
  );
};
