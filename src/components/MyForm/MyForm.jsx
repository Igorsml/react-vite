import { useId } from "react";
import useForm from "../../hooks/useForm/useForm";
import validate from "./LoginFormValidationRules";
import classes from "./MyForm.module.scss";

export const MyForm = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validate
  );
  const id = useId();

  function login() {
    alert("Success!");
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={classes.formBody}>
      <div className={classes.formGroup}>
        <label className="label">Email Address</label>
        <div className="control">
          <input
            autoComplete="off"
            className={`${classes.formInput} ${errors.email && "isDanger"}`}
            type="email"
            name="email"
            onChange={handleChange}
            value={values.email || ""}
            required
            aria-describedby={id}
          />
          <p id={id}>test use ID {id}</p>
        </div>
      </div>
      {errors.email && <p className={classes.isDanger}>{errors.email}</p>}
      <div className={classes.formGroup}>
        <label className="label">Password</label>
        <div className="control">
          <input
            className={`${classes.formInput} ${errors.password && "isDanger"}`}
            type="password"
            name="password"
            onChange={handleChange}
            value={values.password || ""}
            required
          />
        </div>
      </div>
      {errors.password && <p className={classes.isDanger}>{errors.password}</p>}
      <button type="submit">Login My Form</button>
      <MyForm2 />
    </form>
  );
};

const MyForm2 = () => {
  const id = useId();
  return (
    <div>
      <input aria-describedby={id} />
      <p id={id}>test use ID {id}</p>
    </div>
  );
};
