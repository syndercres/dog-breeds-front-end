import { useState, useEffect } from "react";
import { BackendURL } from "../utils/BackendURL";
import modifyDogLink from "../utils/modifyImgLink";
import axios from "axios";
import "./VotingPage.css";
import bones from "../images/bones.png";

//-----------------------------------------------------------------------------------------------Interface for DogVoteType
export interface DogVoteType {
  id: number;
  breed: string;
  likes: number;
}

const dogPicURL = "https://dog.ceo/api/breeds/image/random";
//-----------------------------------------------------------------------------------------------Defining useStates
export default function VotingPage(): JSX.Element {
  const [imgOne, setImgOne] = useState<string | null>(null);
  const [imgTwo, setImgTwo] = useState<string | null>(null);
  const [prevImgOne, setPrevImgOne] = useState<string | undefined>(undefined);
  const [prevImgTwo, setPrevImgTwo] = useState<string | undefined>(undefined);
  const [userVotes, setUserVotes] = useState<number>(0);
  //-----------------------------------------------------------------------------------------------Fetching images from dog API
  useEffect(() => {
    // fetching the first image
    fetch(dogPicURL)
      .then((res) => res.json())
      .then((data) => setImgOne(data.message));
    // fetching the second image
    fetch(dogPicURL)
      .then((res) => res.json())
      .then((data) => setImgTwo(data.message));

    // fetching the preview images
    handleFetchDogs();
  }, []);

  const dogAudio = new Audio("../utils/dog.mp3");

  const playAudio = () => {
    dogAudio.play();
  };

  const handleFetchDogs = () => {
    // fetching the first image
    fetch(dogPicURL)
      .then((res) => res.json())
      .then((data) => setPrevImgOne(data.message));
    // fetching the second image
    fetch(dogPicURL)
      .then((res) => res.json())
      .then((data) => setPrevImgTwo(data.message));
  };
  //-----------------------------------------------------------------------------------------------Handle for like button
  const handleVote = (imageLink: string) => {
    playAudio();
    postVotes(modifyDogLink(imageLink));
    handleFetchDogs();
    prevImgOne && setImgOne(prevImgOne);
    prevImgTwo && setImgTwo(prevImgTwo);
    setUserVotes((prev) => prev + 1);
  };
  //-----------------------------------------------------------------------------------------------Post request to SERVER
  const postVotes = async (name: string) => {
    try {
      await axios.post(BackendURL + "/votes", { breed: name });
    } catch (err) {
      console.error("I am problem with post", err);
    }
  };
  //-----------------------------------------------------------------------------------------------Return JSX Element
  return (
    <>
      {imgOne && imgTwo && (
        <div className="voting-page">
          <div className="vote-section">
            <div className="vote-container">
              <div className="dog-imgs">
                <img className="vote-img" src={imgOne} alt="" />
                <img className="vote-img-prev" src={prevImgOne} alt="" />
              </div>
              <div className="like-button" onClick={() => handleVote(imgOne)}>
                {/* <img src={LikeImgDefault} alt=""></img> */}
              </div>
            </div>
            <img className="or" src={bones} alt=""></img>
            <div className="vote-container">
              <div className="dog-imgs">
                <img className="vote-img" src={imgTwo} alt="" />
                <img className="vote-img-prev" src={prevImgTwo} alt="" />
              </div>
              <div className="like-button" onClick={() => handleVote(imgTwo)}>
                {/* <img src={LikeImgDefault} alt=""></img> */}
              </div>
            </div>
          </div>
          <div className="vote-text">
            <p className="vote-meter">You've cast {userVotes} votes!</p>
            {userVotes === 0 && (
              <p className="vote-meter">|Come on! cast your vote!</p>
            )}
            {userVotes > 10 && (
              <p className="vote-meter">Wow you're on a supree!</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
