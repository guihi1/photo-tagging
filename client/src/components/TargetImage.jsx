const TargetImage = ({ character, isFound, onSelect }) => {
  return (
    <div
      className="relative group cursor-pointer"
      onClick={onSelect}
      title={character.name}
    >
      <img
        src={character.img}
        alt={character.name}
        className={`
          rounded-full w-12 h-12 object-cover border-2 transition-all duration-300
          ${isFound
            ? "grayscale opacity-40 border-gray-600 cursor-not-allowed"
            : "border-cyan-400 hover:scale-110 hover:border-white shadow-[0_0_10px_rgba(34,211,238,0.5)]"
          }
        `}
      />

      {!isFound && (
        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-white bg-black/80 px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          {character.name}
        </span>
      )}
    </div>
  );
};

export default TargetImage;
