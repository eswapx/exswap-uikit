var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from "react";
import styled, { keyframes } from "styled-components";
import Icon from "./SaltIcon";
var float = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(12px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"], ["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(12px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"])));
var Container = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var SaltingIcon = styled(Icon)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  animation: ", " 0.4s infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 0.4s infinite;\n  transform: translate3d(0, 0, 0);\n"])), float);
var Spinner = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 128 : _b;
    return (React.createElement(Container, null,
        React.createElement(SaltingIcon, { width: "".concat(size * 0.5, "px") })));
};
export default Spinner;
var templateObject_1, templateObject_2, templateObject_3;
