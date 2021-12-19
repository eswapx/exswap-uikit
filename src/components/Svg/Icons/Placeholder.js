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
import Svg from "../Svg";
var Icon = function (props) { return (React.createElement(Svg, __assign({ viewBox: "0 0 196 196" }, props),
    React.createElement("circle", { stroke: "#979797", strokeWidth: 4, fill: "#D8D8D8", cx: 98, cy: 98, r: 98, fillRule: "evenodd" }))); };
export default Icon;
