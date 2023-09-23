export const Comment = (props) => {
  return (
    <div>
      <div>
        <p>{props.value.name}</p>
        <p>{props.value.email}</p>
        {props.value.id && <p>Key id: {props.value.id}</p>}
      </div>
    </div>
  );
};
