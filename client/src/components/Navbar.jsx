import ProfileImage from "./ProfileImage";
import Timer from "./Timer";

const Navbar = ({ isAtBottom, foundCharacters, allCharacters }) => {
	const isGameOver =
		allCharacters.length > 0 && foundCharacters.length === allCharacters.length;

	return (
		<nav
			className={`bg-black/90 text-white m-0 p-3 z-50 fixed transition-all duration-300 ease-in-out left-0 w-full ${isAtBottom ? "top-0 shadow-lg" : "bottom-0 shadow-t-lg"
				}`}
		>
			<div className="flex justify-between items-center max-w-7xl mx-auto">
				<h3 className="font-bold text-lg hidden sm:block">
					Find all characters
				</h3>

				<div className="flex gap-4 items-center">
					{allCharacters.map((char) => {
						const isFound = foundCharacters.includes(char.id);

						return (
							<div
								key={char.id}
								className={`transition-all duration-500 `}
								title={isFound ? "Found!" : `Find ${char.name}`}
							>
								<ProfileImage filepath={char.img} isFound={isFound} />
								{isFound && (
									<div className="absolute -top-1 -right-1 bg-green-500 rounded-full p-0.5 w-3 h-3 border border-black"></div>
								)}
							</div>
						);
					})}
				</div>

				<div className="flex items-center gap-5">
					<Timer gameOver={isGameOver} />

					<button
						type="button"
						className="bg-white/10 hover:bg-white/20 px-3 py-1 rounded text-sm transition-colors border border-white/20"
					>
						Leaderboard
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
