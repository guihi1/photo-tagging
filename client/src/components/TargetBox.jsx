import TargetImage from "./TargetImage";

const TargetBox = ({ position, characters, foundCharacters, onFound }) => {
  return (
    <div
      className="flex gap-4 absolute w-max bg-black/90 p-3 rounded-full z-50 shadow-2xl border border-white/10"
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, 50%)",
      }}
    >
      {characters.map((char) => {
        const isFound = foundCharacters.includes(char.id);

        return (
          <TargetImage
            key={char.id}
            character={char}
            isFound={isFound}
            onSelect={() => !isFound && onFound(char.id)}
          />
        );
      })}
    </div>
  );
};

export default TargetBox;
