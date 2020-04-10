"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/ban-ts-ignore */
const each_1 = __importDefault(require("lodash/each"));
function processData(data, props) {
    const processedData = [];
    each_1.default(data, (dataObject) => {
        const dynamicObject = { props: [] }; //t['field1'] = { prop: null };
        each_1.default(Object.keys(dataObject), (key) => {
            if (props.includes(key)) {
                dynamicObject[`${key}`] = dataObject[`${key}`];
            }
            else {
                //FIXME:
                // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-ignore
                dynamicObject.props.push([
                    `${key}`,
                    `${dataObject[`${key}`]}`,
                ]);
            }
        });
        processedData.push(dynamicObject);
    });
    return processedData;
}
exports.processData = processData;
//# sourceMappingURL=generic-helpers.js.map