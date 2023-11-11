import { useState } from "react";

import classes from "./RegForm.module.scss";

const emailTestRegExp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const emailValidator = [
  (v) => !v.length && "поле email не может быть пустым",
  (v) => !emailTestRegExp.test(v) && "некоректный email",
];

const passwordValidator = [
  (v) => !v.length && "поле пароль не может быть пустым",
  (v) => v.length < 3 && "пароль должен быть более 3 символов",
  (v) => v.length >= 8 && "пароль должен быть менее 8 символов",
];

function testValue(value, tests) {
  tests = [].concat(tests);

  for (const test of tests) {
    const result = test(value);

    if (typeof result === "string") return result;
  }

  return null;
}

export const RegForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);

  const emailError = testValue(email, emailValidator);
  const passwordError = testValue(password, passwordValidator);
  const formValid =
    emailDirty && passwordDirty && !emailError && !passwordError;

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

  return (
    <form className={classes.formBody}>
      <h2>Регистрация</h2>
      <input
        className={classes.formInput}
        onBlur={blurHandler}
        onChange={({ target }) => setEmail(target.value)}
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
        onChange={({ target }) => setPassword(target.value)}
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
