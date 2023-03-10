import { useEffect, useState } from "react";
import generateLink from "../utils/generateLink";

interface PodiumSpotProps {
  dogName: string;
  indexNumber: number;
}

export default function PodiumSpot(props: PodiumSpotProps): JSX.Element {
  const { dogName, indexNumber } = props;
  const [dogImg, setDogImg] = useState<string>("");

  useEffect(() => {
    const link = generateLink(dogName);
    fetch(link)
      .then((res) => res.json())
      .then((data) => setDogImg(data.message[randomNum(data.message.length)]));
  }, [dogName]);

  //------------------------------------------- creates a random number
  const randomNum = (maxNum: number) => {
    return Math.floor(Math.random() * maxNum);
  };
  const handleSetNewImg = () => {
    const link = generateLink(dogName);
    fetch(link).then((res) => console.log(res));
  };
  return (
    <div className={"place" + indexNumber.toString()}>
      <p className="podium-spot-txt">{dogName}</p>
      <img
        className="podium-spot-img"
        src={dogImg}
        onClick={() => handleSetNewImg()}
        alt=""
      />
    </div>
  );
}
