import ProfileImage from "./ProfileImage";
import { useState, useEffect } from "react";

const Navbar = () => {
	const [isAtBottom, setIsAtBottom] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY + window.innerHeight;
			const pageHeight = document.documentElement.scrollHeight;
			if (scrollPosition >= pageHeight - 10) {
				setIsAtBottom(true);
			} else {
				setIsAtBottom(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav
			className={`bg-black/90 m-0 p-3 fixed ${isAtBottom ? "top-0 animate-slide-down" : "bottom-0 animate-slide-up"} left-0 w-full`}
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
