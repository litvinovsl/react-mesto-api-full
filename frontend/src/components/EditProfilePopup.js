import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const currentUser = React.useContext(CurrentUserContext);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  React.useEffect(() => {
    if (props.isOpen) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [props.isOpen, currentUser]);

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUser({
      name: name,
      about: description,
    });
    currentUser.name = name;
    currentUser.about = description;
  }

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      buttonText="Сохранить"
      name="popup-user"
      title="Редактировать профиль"
    >
      <input
        id="popup__username"
        value={name || "Имя"}
        onChange={handleChangeName}
        type="text"
        className="popup__input"
        name="name"
        placeholder="Имя"
        required
        minLength={2}
        maxLength={40}
      />
      <span className="popup__username-error popup__input-error"></span>
      <input
        id="popup__user-about"
        value={description || "О себе.."}
        onChange={handleChangeDescription}
        type="text"
        className="popup__input"
        name="about"
        placeholder="О себе.."
        required
        minLength={2}
        maxLength={40}
      />
      <span className="popup__user-about-error popup__input-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
