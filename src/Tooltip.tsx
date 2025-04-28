import React, { useState } from "react";

interface CustomTooltipProps {
  icon: React.ReactNode;
  content: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
}

const Tooltip = ({ icon, content, position = "top" }: CustomTooltipProps) => {
  const [visible, setVisible] = useState(false);

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);

  const getPositionStyles = () => {
    switch (position) {
      case "top":
        return { bottom: "100%", left: "50%", transform: "translateX(-50%)" };
      case "right":
        return { top: "50%", left: "100%", transform: "translateY(-50%)" };
      case "bottom":
        return { top: "100%", left: "50%", transform: "translateX(-50%)" };
      case "left":
        return { top: "50%", right: "100%", transform: "translateY(-50%)" };
      default:
        return {};
    }
  };

  return (
    <div
      className="tooltip-wrapper"
      style={{ display: "inline-block", position: "relative" }}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      <div>{icon}</div>
      {visible && (
        <div
          className="tooltip-text"
          style={{
            position: "absolute",
            background: "#333",
            color: "#fff",
            padding: "10px",
            borderRadius: "8px",
            fontSize: "14px",
            minWidth: "250px",
            ...getPositionStyles(),
            zIndex: 1000,
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
