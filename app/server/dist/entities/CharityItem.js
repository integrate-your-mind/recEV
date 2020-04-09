"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint no-use-before-define: 0 */ // --> OFF
const type_graphql_1 = require("type-graphql");
const typegoose_1 = require("@typegoose/typegoose");
const Charity_1 = require("./Charity");
let Prop = class Prop {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Prop.prototype, "key", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Prop.prototype, "value", void 0);
Prop = __decorate([
    type_graphql_1.ObjectType()
], Prop);
let CharityItem = class CharityItem extends Charity_1.Charity {
};
__decorate([
    type_graphql_1.Field((type) => [Prop]),
    __metadata("design:type", Array)
], CharityItem.prototype, "props", void 0);
CharityItem = __decorate([
    type_graphql_1.ObjectType()
], CharityItem);
exports.CharityItem = CharityItem;
exports.CharityItemModel = typegoose_1.getModelForClass(CharityItem);
//# sourceMappingURL=CharityItem.js.map