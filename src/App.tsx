import { greet } from "./utils/greet";
import VotingPage from "./components/VotingPage";
import HighScore from "./components/HighScore";
import DogPodium from "./components/Podium";
import { useState } from "react";
import "./App.css";

function App(): JSX.Element {
  const [positions, setPositions] = useState<string[]>([]);
  return (
    <>
      <h1>{greet("Dog Lovers!")} Let's start this breed-battle</h1>
      <VotingPage />
      <DogPodium positions={positions} />
      <HighScore setPositions={setPositions} />
    </>
  );
}

export default App;
