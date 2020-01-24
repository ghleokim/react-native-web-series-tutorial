"use strict";
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var mobx_react_lite_1 = require("mobx-react-lite");
var CounterStore_1 = require("./stores/CounterStore");
var Router_1 = require("./Router");
exports.App = mobx_react_lite_1.observer(function () {
    var counterStore = react_1.useContext(CounterStore_1.CounterStoreContext);
    return (react_1.default.createElement(react_native_1.View, { style: styles.sectionContainer },
        react_1.default.createElement(Router_1.Router, null)));
});
var styles = react_native_1.StyleSheet.create({
    engine: {
        position: 'absolute',
        right: 0,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
    halfButton: {
        display: 'flex',
        flexWrap: 'wrap'
    }
});
