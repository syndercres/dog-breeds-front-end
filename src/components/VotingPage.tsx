// import React from "react";
import { useState, useEffect } from "react";
import { BackendURL } from "../utils/BackendURL";
import modifyDogLink from "../utils/modifyImgLink";
import axios from "axios";

export interface DogVoteType {
  id: number;
  breed: string;
  likes: number;
}
const dogPicURL = "https://dog.ceo/api/breeds/image/random";

export default function VotingPage(): JSX.Element {
  const [imgOne, setImgOne] = useState<string | null>(null);
  const [imgTwo, setImgTwo] = useState<string | null>(null);
  //const [reload, setReload] = useState<boolean>(false);
  const [userVotes, setUserVotes] = useState<number>(0);

  useEffect(() => {
    handleFetchDogs();
  }, []);

  const handleFetchDogs = () => {
    // fetching the first image
    fetch(dogPicURL)
      .then((res) => res.json())
      .then((data) => setImgOne(data.message));
    // fetching the second image
    fetch(dogPicURL)
      .then((res) => res.json())
      .then((data) => setImgTwo(data.message));
  };

  const handleVote = (imageLink: string) => {
    postVotes(modifyDogLink(imageLink));
    // this makes the page reload when the LIKE-BTN is clicked
    // setReload(!reload);
    handleFetchDogs();
    setUserVotes((prev) => prev + 1);
  };

  const postVotes = async (name: string) => {
    console.log("post vote is running");
    try {
      const response = await axios.post(BackendURL + "/votes", { breed: name });
      console.log(response);
    } catch (err) {
      console.log("I am problem with post", err);
    }
  };

  return (
    <>
      {imgOne && imgTwo && (
        <div className="voting-page">
          <div className="vote-container">
            <img className="vote-img" src={imgOne} alt="" />
            <button className="like-button" onClick={() => handleVote(imgOne)}>
              LIKE
            </button>
          </div>
          <p className="or">OR</p>
          <div className="vote-container">
            <img className="vote-img" src={imgTwo} alt="" />
            <button className="like-button" onClick={() => handleVote(imgTwo)}>
              LIKE
            </button>
          </div>
          <p className="vote-meter">You've cast {userVotes} votes!</p>
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
