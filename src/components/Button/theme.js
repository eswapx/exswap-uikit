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
var _a, _b;
import { variants } from "./types";
import { lightColors, darkColors } from "../../theme/colors";
var PRIMARY = variants.PRIMARY, SECONDARY = variants.SECONDARY, TERTIARY = variants.TERTIARY, TEXT = variants.TEXT, DANGER = variants.DANGER, SUBTLE = variants.SUBTLE, SUCCESS = variants.SUCCESS;
export var light = (_a = {},
    _a[PRIMARY] = {
        background: lightColors.primary,
        backgroundActive: lightColors.primaryDark,
        backgroundHover: lightColors.primaryBright,
        border: 0,
        borderColorHover: "currentColor",
        color: "#FFFFFF",
    },
    _a[SECONDARY] = {
        background: "transparent",
        backgroundActive: "transparent",
        backgroundHover: "transparent",
        border: "2px solid ".concat(lightColors.primary),
        borderColorHover: lightColors.primaryBright,
        color: lightColors.primary,
    },
    _a[TERTIARY] = {
        background: lightColors.tertiary,
        backgroundActive: lightColors.tertiary,
        backgroundHover: lightColors.tertiary,
        border: 0,
        borderColorHover: "currentColor",
        color: lightColors.primary,
    },
    _a[TEXT] = {
        background: "transparent",
        backgroundActive: "transparent",
        backgroundHover: lightColors.tertiary,
        border: 0,
        borderColorHover: "currentColor",
        color: lightColors.primary,
    },
    _a[DANGER] = {
        background: lightColors.failure,
        backgroundActive: "#ff6659",
        backgroundHover: "#ff7961",
        border: 0,
        borderColorHover: "currentColor",
        color: "#FFFFFF",
    },
    _a[SUBTLE] = {
        background: lightColors.textSubtle,
        backgroundActive: "".concat(lightColors.textSubtle, "D9"),
        backgroundHover: "".concat(lightColors.textSubtle, "B3"),
        border: 0,
        borderColorHover: "currentColor",
        color: "#FFFFFF",
    },
    _a[SUCCESS] = {
        background: lightColors.success,
        backgroundActive: "".concat(lightColors.success, "D9"),
        backgroundHover: "".concat(lightColors.success, "B3"),
        border: 0,
        borderColorHover: "currentColor",
        color: "#FFFFFF",
    },
    _a);
export var dark = (_b = {},
    _b[PRIMARY] = __assign({}, light.primary),
    _b[SECONDARY] = __assign({}, light.secondary),
    _b[TERTIARY] = __assign(__assign({}, light.tertiary), { background: darkColors.tertiary, backgroundActive: darkColors.tertiary, backgroundHover: darkColors.tertiary, color: darkColors.primary }),
    _b[TEXT] = __assign(__assign({}, light.text), { backgroundHover: darkColors.tertiary }),
    _b[DANGER] = __assign({}, light.danger),
    _b[SUBTLE] = __assign({}, light.subtle),
    _b[SUCCESS] = __assign({}, light.success),
    _b);
