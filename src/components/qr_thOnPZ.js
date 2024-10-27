"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Input = function (_a) {
    var placeholder = _a.placeholder, props = __rest(_a, ["placeholder"]);
    return (<input placeholder={placeholder} className="w-full h-[3.6] p-2 pl-4 text-gray-500 bg-gray-100 rounded-xl border-none focus:outline-none" {...props}/>);
};
exports.default = Input;
