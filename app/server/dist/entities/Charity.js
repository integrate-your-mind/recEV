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
const type_graphql_1 = require("type-graphql");
const mongodb_1 = require("mongodb");
let Charity = class Charity {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", mongodb_1.ObjectId)
], Charity.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Charity.prototype, "charityLegalName", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], Charity.prototype, "imageURL", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Charity.prototype, "charityWebsite", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Charity.prototype, "smallDescription", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], Charity.prototype, "longDescription", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Charity.prototype, "addressLine1", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Charity.prototype, "city", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Charity.prototype, "state", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Charity.prototype, "country", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], Charity.prototype, "postcode", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Boolean)
], Charity.prototype, "isActive", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Date)
], Charity.prototype, "dateCreated", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Date)
], Charity.prototype, "lastModified", void 0);
Charity = __decorate([
    type_graphql_1.ObjectType()
], Charity);
exports.Charity = Charity;
//# sourceMappingURL=Charity.js.map