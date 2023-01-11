import axios from "axios";
import { useEffect, useState } from "react";
import { DogVoteType } from "../components/VotingPage";
import { BackendURL } from "../utils/BackendURL";
import loadingBtn from "../images/loading.png";
import "./HighScore.css";

//-----------------------------------------------------------------------------------------------HighScore function declaration
export default function HighScore(): JSX.Element {
  //-----------------------------------------------------------------------------------------------Defining useStates and useEffect
  const [allVotes, setAllVotes] = useState<DogVoteType[]>([]);

  useEffect(() => {
    getVotes();
  }, []);

  //-----------------------------------------------------------------------------------------------GET request to SERVER,gets all votes.
  const getVotes = async () => {
    try {
      const response = await axios.get(BackendURL + "/votes");
      setAllVotes(response.data.rows);
    } catch (error) {
      console.error(error);
    }
  };

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
