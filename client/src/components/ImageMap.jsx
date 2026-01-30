import { useState } from "react";
import TargetBox from "./TargetBox";

const ImageMap = ({ setIsAtBottom }) => {
  const [position, setPosition] = useState([0, 0]);
  const [menuPosition, setMenuPosition] = useState({
    x: 0,
    y: 0,
    visible: false,
  });

  const closeMenu = (e) => {
    if (e) e.stopPropagation();

    setMenuPosition((prev) => ({
      ...prev,
      visible: false,
    }));
  };

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;

    if (scrollTop + clientHeight >= scrollHeight - 10) {
      setIsAtBottom(true);
    } else {
      setIsAtBottom(false);
    }
  };

  const handleMapClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMenuPosition({
      x: x,
      y: y,
      visible: true,
    });

    const xPercentage = Math.round((x / rect.width) * 100);
    const yPercentage = Math.round((y / rect.height) * 100);

    setPosition([xPercentage, yPercentage]);
  };

  return (
    <div
      className="fixed inset-0 overflow-auto bg-gray-900"
      onScroll={handleScroll}
    >
      {menuPosition.visible && (
        <div
          className="fixed inset-0 z-40 w-full h-full cursor-default bg-transparent"
          onClick={closeMenu}
        >
          <div
            className="absolute w-15 h-15 rounded-full shadow-[0_0_0_9999px_rgba(0,0,0,0.8)] pointer-events-none"
            style={{
              left: menuPosition.x,
              top: menuPosition.y,
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>
      )}
      <img
        src="/images/find-waldo.jpg"
        alt="Game Map"
        className="block select-none max-w-none w-auto h-auto min-w-250 md:min-w-375"
        draggable="false"
        onClick={handleMapClick}
      />

      {menuPosition.visible && <TargetBox position={menuPosition} />}
    </div>
  );
};

export default ImageMap;
