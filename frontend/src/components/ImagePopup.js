import React from "react";
import closeIcon from "../images/Close-Icon.svg";

function ImagePopup(props) {
  return (
    <section
      id="popup-card"
      className={`popup popup_type_image ${props.card ? "popup_opened" : ""}`}
      onClick={props.onCloseClick}
    >
      <div className="popup__open-place">
        <button
          id="popup-closeCard"
          type="button"
          className="popup__button-close"
        >
          <img
            className="popup__button-close-img"
            src={closeIcon}
            alt="Закрыть"
            onClick={props.onClose}
          />
        </button>
        <img
          className="popup__image"
          src={props.card ? props.card.link : ""}
          alt="картинка"
        />
        <p className="popup__img-name">{props.card ? props.card.name : ""}</p>
      </div>
      <div
        id="overlayOpenCard"
        className="popup__overlay"
        onClick={props.onClose}
      ></div>
    </section>
  );
}

export default ImagePopup;
