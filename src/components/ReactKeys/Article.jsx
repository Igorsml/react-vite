export const Article = (props) => {
  return (
    <ul>
      <li key={props.index}>
        {props.theme.title}
        {props.theme.key && <p>Key: {props.theme.key}</p>}
        {props.dateKey && <p>DataKey: {props.dateKey}</p>}
        {props.indexKey && <p>IndexKey: {props.indexKey}</p>}
        {props.lengthKey && <p>LengthKey: {props.lengthKey}</p>}
        {props.uuidKey && <p>UuidKey: {props.uuidKey}</p>}
      </li>
    </ul>
  );
};
