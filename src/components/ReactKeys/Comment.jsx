export const Comment = (props) => {
  console.log("props:", props);
  return (
    <div>
      <div>
        <p>{props.value.name}</p>
        <p>{props.value.username}</p>
        <p>{props.value.email}</p>
        <p>{props.value.address.city}</p>
        {props.value.id && <p>Key id: {props.value.id}</p>}
      </div>
    </div>
  );
};
