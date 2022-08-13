import React from "react";
import closeIcon from "../images/Close-Icon.svg";

function PopupWithForm(props) {
  return (
    <section
      className={`popup popup_type_${props.name} ${
        props.isOpen && "popup_opened"
      }`}
    >
      <div className="popup__container">
        <button
          id="popup-user-close"
          onClick={props.onClose}
          type="button"
          className="popup__button-close"
        >
          <img
            className="popup__button-close-img"
            src={closeIcon}
            alt="Закрыть"
          />
        </button>
        <h2 className="popup__edit-text">{props.title}</h2>
        <form
          onSubmit={props.onSubmit}
          id="form-profile"
          className="popup__form"
          name={props.name}
          action="#"
          noValidate
        >
          <fieldset className="popup__inputs">
            {props.children}
            <button className="popup__button-save" type="submit">
              {props.buttonText}
            </button>
          </fieldset>
        </form>
      </div>
      <div
        id="overlayProfile"
        onClick={props.onClose}
        className="popup__overlay"
      ></div>
    </section>
  );
}

export default PopupWithForm;
