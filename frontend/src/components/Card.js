import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = props.card.owner._id === currentUser._id;
  const isLiked = props.card.likes.some((i) => i._id === currentUser._id);

  const cardDeleteButtonClassName = `${
    isOwn ? "element__delete" : "element__delete element__delete_none"
  }`;

  const cardLikeButtonClassName = `${
    !isLiked ? "element__like" : "element__like element__like_active"
  }`;

  // console.log(isLiked)

  function handleCardClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
    console.log('like');
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  return (
    <div key={props.props.key} className="element">
      <button
        onClick={handleDeleteClick}
        type="button"
        className={cardDeleteButtonClassName}
      ></button>
      <img
        className="element__image"
        onClick={handleCardClick}
        src={props.props.link}
        alt={props.props.name}
      />
      <p className="element__name">{props.props.name}</p>
      <div className="element__counter-and-like">
        <button
          type="button"
          onClick={handleLikeClick}
          className={cardLikeButtonClassName}
        ></button>
        <p className="element__like-counter">{props.props.likes.length}</p>
      </div>
    </div>
  );
}

export default Card;
