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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint no-use-before-define: 0 */ // --> OFF
const type_graphql_1 = require("type-graphql");
const data_1 = require("../data");
const AUCharity_1 = __importDefault(require("../schemas/AUCharity"));
let default_1 = class default_1 {
    //TODO: Document this query, used for search functionality
    // @Query((returns) => AUCharity, { nullable: true })
    // auCharityByName(@Arg('charityLegalName') charityLegalName: string): CharityData | undefined {
    //     return australian_charities.find((charity) => charity.charityLegalName === charityLegalName);
    // }
    fetchCharities() {
        return data_1.australian_charities;
    }
};
__decorate([
    type_graphql_1.Query((returns) => [AUCharity_1.default]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], default_1.prototype, "fetchCharities", null);
default_1 = __decorate([
    type_graphql_1.Resolver((of) => AUCharity_1.default)
], default_1);
exports.default = default_1;
//# sourceMappingURL=CharityResolver.js.map