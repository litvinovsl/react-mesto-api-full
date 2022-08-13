import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditAvatarPopup(props) {
  const inputRef = React.useRef();
  const currentUser = React.useContext(CurrentUserContext);

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: inputRef.current.value,
    });
    currentUser.avatar = inputRef.current.value;
  }

  React.useEffect(() => {
    inputRef.current.value = "";
  }, [props.isOpen]);

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      isOpen={props.isOpen}
      onClose={props.onClose}
      buttonText="Изменить"
      name="update-avatar"
      title="Обновить аватар"
    >
      <input
        id="popup__avatar-link"
        ref={inputRef}
        type="url"
        className="popup__input"
        name="link"
        placeholder="Ссылка на картинку"
        required
      />
      <span className="popup__avatar-link-error popup__input-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
