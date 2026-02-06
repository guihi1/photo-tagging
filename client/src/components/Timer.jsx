import { useState, useEffect } from "react";

const Timer = ({ gameOver }) => {
	const [seconds, setSeconds] = useState(0);
	useEffect(() => {
		const startTime = Date.now();

		const interval = setInterval(() => {
			if (gameOver) return;

			const now = Date.now();
			const elapsed = Math.floor((now - startTime) / 1000);

			setSeconds(elapsed);
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, [gameOver]);

	const formatTime = (totalSeconds) => {
		const min = Math.floor(totalSeconds / 60)
			.toString()
			.padStart(2, "0");
		const sec = (totalSeconds % 60).toString().padStart(2, "0");
		return `${min}:${sec}`;
	};

	return (
		<div className="font-mono text-xl text-white bg-gray-800 px-3 py-1 rounded border border-gray-600 shadow-inner">
			{formatTime(seconds)}
		</div>
	);
};

export default Timer;
