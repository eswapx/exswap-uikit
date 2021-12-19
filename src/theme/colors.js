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
export var baseColors = {
    failure: "#ff6f60",
    primary: "#b0bec5",
    primaryBright: "#cfd8dc",
    primaryDark: "#90a4ae",
    secondary: "#9f9f9f",
    success: "#76d275",
    warning: "#5c007a",
};
export var brandColors = {
    binance: "#F0B90B",
};
export var lightColors = __assign(__assign(__assign({}, baseColors), brandColors), { background: "#FAF9FA", backgroundDisabled: "#E9EAEB", contrast: "#191326", invertedContrast: "#FFFFFF", input: "#EFF4F5", tertiary: "#EFF4F5", text: "#2c2c2c", textDisabled: "#BDC2C4", textSubtle: "#6d6d6d", borderColor: "#E9EAEB", card: "#FFFFFF", gradients: {
        bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
    } });
export var darkColors = __assign(__assign(__assign({}, baseColors), brandColors), { secondary: "#e2e9f0", background: "#100C18", backgroundDisabled: "#3c3742", contrast: "#FFFFFF", invertedContrast: "#191326", input: "#483f5a", primaryDark: "#0098A1", tertiary: "#353547", text: "#F2F6F9", textDisabled: "#9b95a7", textSubtle: "#e2e9f0", borderColor: "#524B63", card: "#27262c", gradients: {
        bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    } });
