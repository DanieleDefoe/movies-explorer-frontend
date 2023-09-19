/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { FC, useContext, MouseEvent } from 'react';

import './Popup.css';
import { PopupProps } from './lib/types';
import { ErrorSvg } from './ErrorSvg';
import { SuccessSvg } from './SuccessSvg';
import { DataContext, DataContextValues } from '../../contexts';

export const Popup: FC<PopupProps> = ({ type, message, open }) => {
  const { setPopupOpen } = useContext(DataContext) as DataContextValues;

  function handleClose() {
    setPopupOpen(false);
  }

  function handleOverlayClick(event: MouseEvent<HTMLElement>) {
    if (event.target === event.currentTarget) {
      setPopupOpen(false);
    }
  }

  return (
    <div
      className={`popup-wrapper ${open ? 'popup-wrapper_open' : ''}`}
      onClick={handleOverlayClick}
    >
      <section className="popup">
        {type === 'error' && <ErrorSvg />}
        {type === 'success' && <SuccessSvg />}
        <h3 className="popup__title">{message}</h3>
        <button
          className="popup__exit"
          type="button"
          aria-label="закрыть"
          onClick={handleClose}
        />
      </section>
    </div>
  );
};
