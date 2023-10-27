import { useState, useEffect } from "react";
import classes from "./RegForm.module.scss";

export const RegForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState(
    "поле email не может быть пустым"
  );
  const [passwordError, setPasswordError] = useState(
    "поле пароль не может быть пустым"
  );
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const blurHandler = (event) => {
    switch (event.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);

    if (
      !String(event.target.value)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      setEmailError("Некорректный email");
    } else {
      setEmailError("");
    }
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);

    if (password.length < 3 || password.length >= 8) {
      setPasswordError("Пароль должен быть длиннее 3 и меньше 8 символов");
      if (!event.target.value) {
        setPasswordError("поле пароль не может быть пустым");
      }
    } else {
      setPasswordError("");
    }
  };

  console.log(password.length);

  return (
    <form className={classes.formBody}>
      <h2>Регистрация</h2>
      <input
        className={classes.formInput}
        onBlur={blurHandler}
        onChange={(e) => emailHandler(e)}
        name="email"
        type="email"
        placeholder="Your email"
        value={email}
      />
      {emailDirty && emailError && (
        <p className={classes.isDanger}>{emailError}</p>
      )}
      <input
        className={classes.formInput}
        onBlur={blurHandler}
        onChange={(e) => passwordHandler(e)}
        name="password"
        type="password"
        placeholder="Your password between 3 & 8 characters"
        value={password}
      />
      <p>current password length: {password.length}</p>
      {passwordDirty && passwordError && (
        <p className={classes.isDanger}>{passwordError}</p>
      )}
      <button disabled={!formValid} type="submit">
        Регистрация
      </button>
    </form>
  );
};
