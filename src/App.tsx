import { greet } from "./utils/greet";
import VotingPage from "./components/VotingPage";

function App(): JSX.Element {
  return (
    <>
    <h1>{greet("Dog Lovers!")}</h1>
    <VotingPage />
    </>)
}

export default App;
