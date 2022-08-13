import React from "react";
import closeIcon from "../images/Close-Icon.svg";
import successfully from "../images/successfully.svg"
import error from "../images/errortool.svg"

function InfoTooltip(props) {
  
  return (
    <section className={`popup ${props.isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <button id="popup-user-close" type="button" onClick={props.onClose} className="popup__button-close">
          <img className="popup__button-close-img" src={closeIcon} alt="Закрыть"/>
        </button>
        <img className="success" src={props.massageTooltip ? successfully : error} alt="успешно"/>
        <p className="success-text">{props.massageTooltip ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз."}</p> 
      </div>
      <div id="overlayProfile" className="popup__overlay"></div>
    </section>
  );
}

export default InfoTooltip;
