const ImageMap = ({ setIsAtBottom }) => {
  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;

    if (scrollTop + clientHeight >= scrollHeight - 10) {
      setIsAtBottom(true);
    } else {
      setIsAtBottom(false);
    }
  };

  return (
    <div
      className="fixed inset-0 overflow-auto bg-gray-900"
      onScroll={handleScroll}
    >
      <img
        src="/images/find-waldo.jpg"
        alt="Game Map"
        className="block max-w-none w-auto h-auto min-w-250 md:min-w-375"
        draggable="false"
      />
    </div>
  );
};

export default ImageMap;
