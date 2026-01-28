const TargetImage = ({ filepath }) => {
  return (
    <img
      className="rounded-full w-12 h-12 border-3 border-b-cyan-100"
      src={filepath}
    />
  );
};

export default TargetImage;
