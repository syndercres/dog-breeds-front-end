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
      setAllVotes(response.data);
    } catch (error) {
      console.error(error);
      alert("Failed to get votes from backend");
    }
  };
  return (
    <>
      <h2>This is the high scores section</h2>
      <button onClick={() => getVotes()}>🔄</button>
      <table>
        <tr>
          <th>Breed</th>
          <th>Votes</th>
        </tr>
        {allVotes.map((dog) => {
          return (
            <tr key={dog.id}>
              <td>{dog.breed}</td>
              <td>{dog.votes}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
}
