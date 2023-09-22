export const Article = (props) => {
  console.log("props:", props);
  return (
    <ul>
      <li key={props.index}>{props.theme.title}</li>
      {props.key && <p>Key: {props.theme.key}</p>}
      <p>Key: {props.dateKey}</p>
    </ul>
  );
};
