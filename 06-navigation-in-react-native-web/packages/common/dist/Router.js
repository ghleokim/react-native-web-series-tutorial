"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var mobx_react_lite_1 = require("mobx-react-lite");
var react_1 = require("react");
var CurrentWorkouts_1 = require("./modules/CurrentWorkouts");
var WorkoutHistory_1 = require("./modules/WorkoutHistory");
var RouterStore_1 = require("./stores/RouterStore");
exports.Router = mobx_react_lite_1.observer(function () {
    var RouterStore = react_1.useContext(RouterStore_1.RouterStoreContext);
    return RouterStore.screen === 'WorkoutHistory' ? React.createElement(WorkoutHistory_1.WorkoutHistory, null) : React.createElement(CurrentWorkouts_1.CurrentWorkouts, null);
});
