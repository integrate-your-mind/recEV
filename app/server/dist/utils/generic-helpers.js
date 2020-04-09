"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const each_1 = __importDefault(require("lodash/each"));
function processData(data, props) {
    const dynamicObject = { ['props']: [] }; //t['field1'] = { prop: null };
    const propsArr = [];
    const processedData = each_1.default(data, (dataObject) => {
        each_1.default(Object.keys(dataObject), (key) => {
            if (props.includes(key)) {
                dynamicObject[`${key}`] = dataObject[`${key}`];
                // console.log(dynamicObject);
            }
            else {
                //TODO: Add other props to dynamic object.
                propsArr.push(dataObject[`${key}`]);
            }
        });
    });
    dynamicObject['props'] = propsArr;
    return processedData;
}
exports.processData = processData;
//# sourceMappingURL=generic-helpers.js.map