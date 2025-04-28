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
import React from "react";
import { FaLock } from "react-icons/fa";
import Tooltip from "./Tooltip";
export default {
    title: "Components/Tooltip",
    component: Tooltip,
};
// Define a Template for your story
var Template = function (args) { return (React.createElement(Tooltip, __assign({}, args))); };
// Define your story with default args (props)
export var DefaultTooltip = Template.bind({});
DefaultTooltip.args = {
    icon: React.createElement(FaLock, { size: 32 }),
    content: (React.createElement(React.Fragment, null,
        React.createElement("p", { className: "font-medium text-neutral-900" }, "Private Group"),
        React.createElement("p", { className: "text-sm text-gray-700" }, "Only verified users can join this group."))),
    position: "right",
};
