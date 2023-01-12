interface podiumProps {
  positions: string[];
}

function DogPodium(props: podiumProps): JSX.Element {
  console.log(props.positions);
  return (
    <div>
      <h3> The Winners Are...</h3>
      {props.positions.map((dog, i) => (
        <p key={i}>
          {" "}
          ({i + 1}) {dog}{" "}
        </p>
      ))}
    </div>
  );
}

export default DogPodium;
