import PodiumSpot from "./PodiumSpot";
import "./podium.css";
import podium from "../images/podium.png";

interface podiumProps {
  positions: string[];
}

function DogPodium(props: podiumProps): JSX.Element {
  return (
    <>
      <h3 className="podium-title"> Top 3 Breeds</h3>
      <div className="podium-container">
        <div className="podium-spot-container">
          {props.positions.map((dog, i) => (
            <PodiumSpot dogName={dog} key={i} indexNumber={i} />
          ))}
        </div>
        <img src={podium} alt="" className="podium-picture" />
      </div>
    </>
  );
}

export default DogPodium;
