const ProfileImage = ({ filepath, isFound }) => {
	return (
		<img
			src={filepath}
			alt="character"
			className={`
        rounded-full w-12 h-12 object-cover border-2 transition-all duration-500
      	${isFound ? "opacity-40 grayscale border-gray-600 scale-90" : "border-white shadow-lg scale-100"}
      `}
		/>
	);
};

export default ProfileImage;
