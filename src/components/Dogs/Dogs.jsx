export const Dogs = (props) => {
  const { dogsList = [], addToOrder } = props;

  return (
    <div>
      {dogsList.map((dog) => (
        <Dog key={dog.id} addToOrder={addToOrder} {...dog} />
      ))}
    </div>
  );
};

const Dog = (props) => {
  const { id, name, photoUrl, age, weight, addToOrder } = props;

  return (
    <div
      style={{
        display: "inline-flex",
        margin: "30px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <div>Name: {name}</div>
        <img style={{ width: "200px" }} src={photoUrl} alt="doggo" />
        <div>Age:{age}</div>
        <div>Weight: {weight}</div>
      </div>
      <button onClick={() => addToOrder(id)}>Buy</button>
    </div>
  );
};
