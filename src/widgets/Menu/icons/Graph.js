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
var Icon = function (props) { return (React.createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
    React.createElement("path", { d: "M28 25V10a1 1 0 00-1-1h-4a1 1 0 00-1 1v15h-2V6a1 1 0 00-1-1h-4a1 1 0 00-1 1v19h-2V15a1 1 0 00-1-1H7a1 1 0 00-1 1v10H4V5H2v21a1 1 0 001 1h27v-2zm-4-14h2v14h-2zm-8-4h2v18h-2zm-8 9h2v9H8z" }))); };
export default Icon;
