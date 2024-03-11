import { useDeferredValue } from "react";

interface Comment {
  id: number;
  name: string;
  body: string;
}

interface CommentsProps {
  entities: Comment[];
}

export const Comments: React.FC<CommentsProps> = ({ entities }) => {
  const values = useDeferredValue(entities);
  return (
    <>
      <p>dolorum</p>
      <ul style={{ maxHeight: "200px", overflow: "scroll" }}>
        {values.map((comment) => (
          <li key={comment.id}>
            <h3>{comment.name}</h3>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
