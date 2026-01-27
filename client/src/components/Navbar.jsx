import ProfileImage from "./ProfileImage";

const Navbar = ({ isAtBottom }) => {
	return (
		<nav
			className={`bg-black/90 m-0 p-3 z-50 fixed ${isAtBottom ? "top-0 animate-slide-down" : "bottom-0 animate-slide-up"} left-0 w-full`}
		>
			<div className="flex justify-between items-center">
				<h3>Find all characteres</h3>
				<div className="flex gap-2 items-center">
					<ProfileImage filepath="/images/find1.png" />
					<ProfileImage filepath="/images/find2.png" />
					<ProfileImage filepath="/images/find3.png" />
				</div>
				<div className="flex items-center gap-5">
					<div>Placeholder</div>
					<button type="button">Leaderboard</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
