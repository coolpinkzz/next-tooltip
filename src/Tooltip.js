var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useState } from "react";
var CustomTooltip = function (_a) {
    var icon = _a.icon, content = _a.content, _b = _a.position, position = _b === void 0 ? "top" : _b;
    var _c = useState(false), visible = _c[0], setVisible = _c[1];
    var showTooltip = function () { return setVisible(true); };
    var hideTooltip = function () { return setVisible(false); };
    var getPositionStyles = function () {
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
    return (React.createElement("div", { className: "tooltip-wrapper", style: { display: "inline-block", position: "relative" }, onMouseEnter: showTooltip, onMouseLeave: hideTooltip },
        React.createElement("div", null, icon),
        visible && (React.createElement("div", { className: "tooltip-text", style: __assign(__assign({ position: "absolute", background: "#333", color: "#fff", padding: "10px", borderRadius: "8px", fontSize: "14px", minWidth: "250px" }, getPositionStyles()), { zIndex: 1000 }) }, content))));
};
export default CustomTooltip;
