import { greet } from "./utils/greet";
import VotingPage from "./components/VotingPage";
import HighScore from "./components/HighScore";

function App(): JSX.Element {
  return (
    <>
      <h1>{greet("Dog Lovers!")}</h1>
      <VotingPage />
      <HighScore />
    </>)
}

export default App;
