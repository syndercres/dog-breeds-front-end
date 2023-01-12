import PodiumSpot from "./PodiumSpot";

interface podiumProps {
  positions: string[];
}

function DogPodium(props: podiumProps): JSX.Element {
  console.log(props.positions);

  return (
    <div>
      <h3> The Winners Are...</h3>
      {props.positions.map((dog, i) => (
        <PodiumSpot dogName={dog} key={i} />
      ))}
    </div>
  );
}

export default DogPodium;
