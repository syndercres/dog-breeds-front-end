// import React from "react";
import { useState, useEffect } from "react";
import modifyDogLink from "../utils/modifyImgLink";

export interface DogVoteType {
  id: number;
  breed: string;
  likes: number;
}
const dogPicURL = "https://dog.ceo/api/breeds/image/random";

export default function VotingPage(): JSX.Element {
  const [imgOne, setImgOne] = useState<string | null>(null);
  const [imgTwo, setImgTwo] = useState<string | null>(null);
  const [votedImg, setVotedImg] = useState<string>("");
  const [reload, setReload] = useState<boolean>(false);
  const [userVotes, setUserVotes] = useState<number>(0);
  console.log(votedImg);

  const width = 200;

  useEffect(() => {
    // fetching the first image
    fetch(dogPicURL)
      .then((res) => res.json())
      .then((data) => setImgOne(data.message));
    // fetching the second image
    fetch(dogPicURL)
      .then((res) => res.json())
      .then((data) => setImgTwo(data.message));
  }, [reload]);

  const handleVote = (imageLink: string) => {
    setVotedImg(modifyDogLink(imageLink));
    // call the POST function here!
    // postVote(votedImg)

    setVotedImg("");
    // this makes the page reload when the LIKE-BTN is clicked
    setReload(!reload);
    setUserVotes((prev) => prev + 1);
  };
  return (
    <>
      {imgOne && imgTwo && (
        <div className="voting-page">
          <div className="vote-container">
            <img className="vote-img" src={imgOne} alt="" width={width} />
            <button className="like-button" onClick={() => handleVote(imgOne)}>
              LIKE
            </button>
          </div>
          <p className="or">OR</p>
          <div className="vote-container">
            <img className="vote-img" src={imgTwo} alt="" width={width} />
            <button className="like-button" onClick={() => handleVote(imgTwo)}>
              LIKE
            </button>
          </div>
          <p className="vote-meter">You've casted {userVotes} votes!</p>
          {userVotes === 0 && (
            <p className="vote-meter">Come on! cast your vote!</p>
          )}
          {userVotes > 10 && (
            <p className="vote-meter">Wow you're on a supree!</p>
          )}
        </div>
      )}
    </>
  );
}
