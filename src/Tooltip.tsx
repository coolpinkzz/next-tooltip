import React, { useState, ReactNode } from "react";

interface CustomTooltipProps {
  icon: ReactNode;
  content: ReactNode;
  position?: "top" | "right" | "bottom" | "left";
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  icon,
  content,
  position = "top",
}) => {
  const [visible, setVisible] = useState(false);

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);

  const getPositionStyles = (): React.CSSProperties => {
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

export default CustomTooltip;
