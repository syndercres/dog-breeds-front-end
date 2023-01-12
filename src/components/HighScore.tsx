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

  //-----------------------------------------------------------------------------------------------GET request to SERVER,gets all votes.
  const getVotes = useCallback(async () => {
    try {
      const response = await axios.get(BackendURL + "/votes");
      const newAllVotes: DogVoteType[] = response.data.rows;
      setAllVotes(newAllVotes);
      newAllVotes.length > 0 &&
        setPositions([
          newAllVotes[0].breed,
          newAllVotes[1].breed,
          newAllVotes[2].breed,
        ]);
    } catch (error) {
      console.error(error);
    }
  }, [setPositions]);

  //---------------------------------------useEffect
  useEffect(() => {
    getVotes();
  }, [getVotes]);

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
