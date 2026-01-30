import TargetImage from "./TargetImage";

const TargetBox = ({ position }) => {
  return (
    <div
      className="flex gap-5 absolute w-max bg-black/90 p-3 rounded-4xl z-50"
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, 50%)",
      }}
    >
      <TargetImage filepath="/images/find1.png" />
      <TargetImage filepath="/images/find2.png" />
      <TargetImage filepath="/images/find3.png" />
    </div>
  );
};

export default TargetBox;
