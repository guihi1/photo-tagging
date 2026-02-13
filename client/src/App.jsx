import { useState, useEffect } from "react";
import "./App.css";
import ImageMap from "./components/ImageMap";
import Navbar from "./components/Navbar";
import { CHARACTERS } from "./data";

function App() {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [foundCharacters, setFoundCharacters] = useState(["waldo"]);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (foundCharacters.length === CHARACTERS.length && CHARACTERS.length > 0) {
      setGameOver(true);
    }
  }, [foundCharacters]);

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
        />
      </div>

      {gameOver && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="bg-white p-10 rounded text-center">
            <h1 className="text-4xl font-bold mb-4">VITÓRIA!</h1>
            <button
              onClick={() => window.location.reload()}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Jogar Novamente
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
