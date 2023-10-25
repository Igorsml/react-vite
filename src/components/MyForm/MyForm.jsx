import classes from "./MyForm.module.scss";
import { useForm } from "../../hooks/useForm/useForm";
import { validate } from "./LoginFormValidationRules";

export const MyForm = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validate
  );

  function login() {
    console.log("login");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          autoComplete="off"
          value={values.email || ""}
          onChange={handleChange}
          required
        />
        {errors.email && <p className={classes.isDanger}>{errors.email}</p>}
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={values.password || ""}
          onChange={handleChange}
          required
        />
        {errors.password && (
          <p className={classes.isDanger}>{errors.password}</p>
        )}
        <button type="submit" value="Отправить">
          Login
        </button>
      </form>
    </>
  );
};
