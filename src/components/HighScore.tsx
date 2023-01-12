import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { DogVoteType } from "../components/VotingPage";
import { BackendURL } from "../utils/BackendURL";
import loadingBtn from "../images/loading.png";
import "./HighScore.css";

interface HighScoreProps {
  setPositions: React.Dispatch<React.SetStateAction<string[]>>;
}
//-----------------------------------------------------------------------------------------------HighScore function declaration
export default function HighScore(props: HighScoreProps): JSX.Element {
  //-----------------------------------------------------------------------------------------------Defining useStates and useEffect
  const [allVotes, setAllVotes] = useState<DogVoteType[]>([]);
  const setPositions = props.setPositions;

  const getPodium = useCallback(() => {
    allVotes.length > 0 &&
      setPositions([allVotes[0].breed, allVotes[1].breed, allVotes[2].breed]);
  }, [allVotes, setPositions]);

  //-----------------------------------------------------------------------------------------------GET request to SERVER,gets all votes.
  const getVotes = useCallback(async () => {
    try {
      const response = await axios.get(BackendURL + "/votes");
      setAllVotes(response.data.rows);
      getPodium();
    } catch (error) {
      console.error(error);
    }
  }, [getPodium]);

  //---------------------------------------useEffect
  useEffect(() => {
    getVotes().then(() => getPodium());
  }, [getPodium, getVotes]);

  //-----------------------------------------------------------------------------------------------JSX return
  return (
    <div className="leaderboard-section">
      <h2>Leaderboard</h2>
      <div className="refresh-button-div">
        <img
          className="refresh-button-img"
          src={loadingBtn}
          onClick={() => getVotes()}
          alt=""
        />
      </div>
      <table className="votes-table">
        <tr className="table-header">
          <th className="table-column">Breed</th>
          <th className="table-column">Votes</th>
        </tr>
        {allVotes.map((dog) => {
          return (
            <tr key={dog.id} className="table-row-body">
              <td className="table-row">{dog.breed}</td>
              <td className="table-row">{dog.likes}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
