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
import Svg from "../../../components/Svg/Svg";
var Icon = function (props) { return (React.createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
    React.createElement("path", { d: "M0 10H6V16H0z" }),
    React.createElement("path", { d: "M0 19.917H6V25.917H0z" }),
    React.createElement("path", { d: "M0 30.084H6V36.084H0z" }),
    React.createElement("path", { d: "M10 10H48V16H10z" }),
    React.createElement("path", { d: "M10 19.917H48V25.917H10z" }),
    React.createElement("path", { d: "M10 30.084H48V36.084H10z" }))); };
export default Icon;
