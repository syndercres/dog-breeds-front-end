import axios from "axios";
import { useEffect, useState } from "react";
import { DogVoteType } from "../components/VotingPage";
import { BackendURL } from "../utils/BackendURL";

export default function HighScore(): JSX.Element {
  const [allVotes, setAllVotes] = useState<DogVoteType[]>([]);

  useEffect(() => {
    getVotes();
  }, []);

  //function to get all the votes from the backend database.
  const getVotes = async () => {
    try {
      const response = await axios.get(BackendURL + "/votes");
      setAllVotes(response.data.rows);
      // console.log(response.data.rows)
    } catch (error) {
      console.error(error);
    }
  };
  console.log(allVotes);
  return (
    <div className="leaderboard-section">
      <h2>This is the high scores section</h2>
      <button className="refresh-button" onClick={() => getVotes()}>
        🔄
      </button>
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
