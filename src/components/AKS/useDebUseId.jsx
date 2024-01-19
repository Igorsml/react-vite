import { useDebugValue, useId } from "react";

export const UseDebUseId = () => {
  const formId = useId();
  console.log("formId:", formId);
  const firstNameId = useId();
  const firstNameHintId = useId();
  const lastNameId = useId();
  const lastNameHintId = useId();
  const emailId = useId();
  const emailHintId = useId();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("onSubmit");
  };

  return (
    <div>
      <form id={formId} onSubmit={onSubmit}>
        {/* <form onSubmit={onSubmit}> */}
        <label htmlFor={firstNameId}>First Name</label>
        <input
          name="firstName"
          id={firstNameId}
          aria-describedby={firstNameHintId}
        />
        <p id={firstNameHintId}>first name hint</p>

        <label htmlFor={lastNameId}>First Name</label>
        <input
          name="firstName"
          id={lastNameId}
          aria-describedby={lastNameHintId}
        />
        <p id={lastNameHintId}>first name hint</p>

        <label htmlFor={emailId}>First Name</label>
        <input name="firstName" id={emailId} aria-describedby={emailHintId} />
        <p id={emailHintId}>first name hint</p>
      </form>
      <button type="submit" form={formId}>
        Submit
      </button>
    </div>
  );
};
