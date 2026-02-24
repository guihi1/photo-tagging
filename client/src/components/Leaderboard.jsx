import { useState, useEffect } from "react";

const Leaderboard = () => {
  const [scores, setScores] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await fetch("http://localhost:3000/game/leaderboard");
        const data = await response.json();
        setScores(data);
      } catch (error) {
        console.error("Error getting the leaderboard", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  const displaySlots = Array.from({ length: 10 });

  if (isLoading) {
    return (
      <div className="max-w-md mx-auto bg-gray-900 p-6 rounded-xl border border-gray-800 text-center flex justify-center items-center min-h-125 shadow-2xl">
        <span className="animate-pulse text-cyan-500 font-semibold tracking-widest">
          LOADING RANKS...
        </span>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-gray-900 p-6 rounded-xl shadow-2xl border border-gray-800 font-sans">
      <h2 className="text-3xl font-black text-center mb-6 tracking-wider text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
        LEADERBOARD
      </h2>

      <ul className="space-y-3">
        {displaySlots.map((_, index) => {
          const entry = scores[index];
          const rank = index + 1;

          let rankStyle = "text-gray-400 font-medium";
          let borderStyle = "border-gray-700 bg-gray-800";

          if (entry) {
            if (rank === 1) {
              rankStyle = "text-yellow-400 font-bold text-xl drop-shadow-md";
              borderStyle =
                "border-yellow-500/40 bg-yellow-500/10 shadow-[0_0_15px_rgba(234,179,8,0.15)]";
            } else if (rank === 2) {
              rankStyle = "text-gray-300 font-bold text-lg drop-shadow";
              borderStyle = "border-gray-400/40 bg-gray-400/10";
            } else if (rank === 3) {
              rankStyle = "text-amber-600 font-bold text-lg drop-shadow";
              borderStyle = "border-amber-700/40 bg-amber-700/10";
            }
          }

          return (
            <li
              key={entry ? entry.id : `empty-${index}`}
              className={`flex justify-between items-center p-3 rounded-lg border transition-all duration-300 ${entry
                  ? borderStyle
                  : "border-dashed border-gray-800 bg-transparent"
                }`}
            >
              <div className="flex items-center gap-4">
                <span className={`w-8 text-center ${rankStyle}`}>
                  {rank === 1 && entry
                    ? "🥇"
                    : rank === 2 && entry
                      ? "🥈"
                      : rank === 3 && entry
                        ? "🥉"
                        : `${rank}º`}
                </span>

                <span
                  className={
                    entry
                      ? "text-gray-200 font-medium tracking-wide"
                      : "text-gray-700 italic"
                  }
                >
                  {entry ? entry.playerName || "Anonymous" : "---"}
                </span>
              </div>

              {entry ? (
                <span className="font-mono text-cyan-400 bg-cyan-950/50 border border-cyan-900 px-2 py-1 rounded text-sm tracking-wider">
                  {entry.score.toFixed(2)}s
                </span>
              ) : (
                <span className="font-mono text-gray-700 text-sm">--.--s</span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Leaderboard;
