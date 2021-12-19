import React from "react";
import StyledProgress, { Bar } from "./StyledProgress";
import { ProgressSalt } from "../Svg";
import SaltyProgressWrapper from "./SaltyProgressWrapper";
var stepGuard = function (step) {
    if (step < 0) {
        return 0;
    }
    if (step > 100) {
        return 100;
    }
    return step;
};
var Progress = function (_a) {
    var _b = _a.primaryStep, primaryStep = _b === void 0 ? 0 : _b, _c = _a.secondaryStep, secondaryStep = _c === void 0 ? null : _c, _d = _a.showSaltyProgress, showSaltyProgress = _d === void 0 ? false : _d;
    return (React.createElement(StyledProgress, null,
        showSaltyProgress && (React.createElement(SaltyProgressWrapper, { style: { left: "".concat(stepGuard(primaryStep), "%") } },
            React.createElement(ProgressSalt, null))),
        React.createElement(Bar, { primary: true, style: { width: "".concat(stepGuard(primaryStep), "%") } }),
        secondaryStep ? React.createElement(Bar, { style: { width: "".concat(stepGuard(secondaryStep), "%") } }) : null));
};
export default Progress;
