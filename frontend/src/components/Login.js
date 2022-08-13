import React from "react";

function Login({onLogin}) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
  }

  function handlePasswordChange(evt) {
    setPassword(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log("email: ", email, "pass:", password)
    onLogin(email, password); 
  }
  return (
    <section className="register">
      <h2 className="register__title">Вход</h2>
      <form className="register__form" onSubmit={handleSubmit}>
        <input className="register__input" onChange={handleEmailChange} placeholder="Email"></input>
        <input className="register__input" onChange={handlePasswordChange} placeholder="Пароль"></input>
        <button className="register__submit">Войти</button>
      </form>
    </section>
  );
}

export default Login;