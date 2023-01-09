import { greet } from "./utils/greet";
import VotingPage from "./components/VotingPage";

function App(): JSX.Element {
  return (
    <>
    <h1>{greet("World")}</h1>
    <VotingPage />
    </>)
}

export default App;
