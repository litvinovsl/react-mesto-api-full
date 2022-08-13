import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();

    props.onSubmit({
      name: name,
      link: link,
    });
  }

  React.useEffect(() => {
    if (props.isOpen) {
      setName("");
      setLink("");
    }
  }, [props.isOpen]);

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      buttonText="Сохранить"
      name="popup-create"
      title="Новое место"
    >
      <input
        id="popup__place-name"
        value={name}
        onChange={handleNameChange}
        type="text"
        className="popup__input"
        name="name"
        placeholder="Название"
        minLength={2}
        maxLength={30}
        required
      />
      <span className="popup__place-name-error popup__input-error"></span>
      <input
        id="popup__place-link"
        value={link}
        onChange={handleLinkChange}
        type="url"
        className="popup__input"
        name="link"
        placeholder="Ссылка на картинку"
        required
      />
      <span className="popup__place-link-error popup__input-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
