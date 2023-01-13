import PodiumSpot from "./PodiumSpot";
import "./podium.css";

interface podiumProps {
  positions: string[];
}

function DogPodium(props: podiumProps): JSX.Element {
  return (
    <div className="podium-container">
      <div className="podium-places-container">
        <h3 className="podium-title"> The Winners Are...</h3>
        <div className="podium-spot-container">
          {props.positions.map((dog, i) => (
            <PodiumSpot dogName={dog} key={i} />
          ))}
        </div>
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default DogPodium;
