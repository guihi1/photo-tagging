import { useState, useEffect } from "react";
import "./App.css";
import ImageMap from "./components/ImageMap";
import Navbar from "./components/Navbar";
import { CHARACTERS } from "./data";
import Leaderboard from "./components/Leaderboard";

function App() {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [foundCharacters, setFoundCharacters] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [sessionId, setSessionId] = useState(null);

  useEffect(() => {
    const startSession = async () => {
      try {
        const response = await fetch("http://localhost:3000/game/start", {
          method: "POST",
        });
        const data = await response.json();
        setSessionId(data.sessionId);
      } catch (error) {
        console.error("Failed to start game session on backend", error);
      }
    };

    startSession();
  }, []);

  useEffect(() => {
    const endGame = async () => {
      try {
        const response = await fetch("http://localhost:3000/game/end", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionId }),
        });
        const result = await response.json();
      } catch (error) {
        console.error("Failed to end game session on backend", error);
      }
    };

    if (
      !gameOver &&
      foundCharacters.length === CHARACTERS.length &&
      CHARACTERS.length > 0
    ) {
      setGameOver(true);
      endGame();
    }
  }, [foundCharacters, gameOver, sessionId]);

  const handleCharacterFound = (characterId) => {
    if (!foundCharacters.includes(characterId)) {
      setFoundCharacters([...foundCharacters, characterId]);
    }
  };

  return (
    <>
      <Navbar
        isAtBottom={isAtBottom}
        foundCharacters={foundCharacters}
        allCharacters={CHARACTERS}
      />
      <div className="">
        <ImageMap
          setIsAtBottom={setIsAtBottom}
          foundCharacters={foundCharacters}
          onFound={handleCharacterFound}
          allCharacters={CHARACTERS}
          sessionId={sessionId}
        />
      </div>
      {gameOver && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 transition-all duration-500">
          <div className="bg-gray-950 border border-gray-800 p-8 md:p-12 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.7)] text-center flex flex-col items-center max-w-lg w-full animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-black mb-2 tracking-tight text-transparent bg-clip-text bg-linear-to-br from-green-400 to-emerald-600 drop-shadow-sm">
              Victory!
            </h1>
            <p className="text-gray-400 mb-8 font-medium tracking-wide">
              You found all characters!
            </p>

            <div className="w-full mb-8">
              <Leaderboard />
            </div>

            <button
              onClick={() => window.location.reload()}
              className="group relative px-8 py-4 font-bold text-white text-lg rounded-full bg-linear-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 transition-all duration-300 shadow-[0_0_20px_rgba(225,29,72,0.4)] hover:shadow-[0_0_30px_rgba(225,29,72,0.7)] hover:-translate-y-1 w-full sm:w-auto"
            >
              Play again
            </button>
          </div>
        </div>
      )}{" "}
    </>
  );
}

export default App;
