import React from "react";
import Card from "./Card";
import buttomEdit from "../images/buttom-edit.svg";
import buttomPlus from "../images/buttom-plus.svg";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <button
            className="profile__avatar-button"
            onClick={props.onEditAvatar}
            type="button"
            title="Изменить аватар"
          >
            <img
              className="profile__avatar"
              src={currentUser.avatar}
              alt="аватар"
            />
          </button>
          <div className="profile__user">
            <div className="profile__user-name-edit">
              <h1 className="profile__username">{currentUser.name}</h1>
              <button
                onClick={props.onEditProfile}
                type="button"
                className="profile__edit-butt"
              >
                <img
                  className="profile__edit-butt-img"
                  src={buttomEdit}
                  alt="редактировать"
                />
              </button>
            </div>
            <p className="profile__about-user">{currentUser.about}</p>
          </div>
        </div>
        <button
          onClick={props.onAddPlace}
          type="button"
          className="profile__add-button"
        >
          <img
            className="profile__add-button-img"
            src={buttomPlus}
            alt="добавить картинку"
          />
        </button>
      </section>

      <section className="elements">
        {props.cards.map((card) => (
          <Card
            onCardDelete={props.onCardDelete}
            onCardLike={props.onCardLike}
            key={card._id}
            props={card}
            card={card}
            onCardClick={props.onCardClick}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
