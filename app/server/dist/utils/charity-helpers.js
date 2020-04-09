"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CharityItem_1 = require("../entities/CharityItem");
const each_1 = __importDefault(require("lodash/each"));
async function postData(data) {
    //FIXME: Set 'lastModified' property to only update when charity information updates
    //FIXME: Set 'isActive' property to properly update when charities shut down or are no longer active
    //FIXME: Set 'dateCreated' property to only trigger when a charity is added to the database, if it already exists this property should not be updated.
    each_1.default(data, (charity) => {
        charity.isActive = true;
        charity.lastModified = new Date();
        charity.dateCreated = new Date();
    });
    await CharityItem_1.CharityItemModel.create(data);
}
exports.postData = postData;
//# sourceMappingURL=charity-helpers.js.map