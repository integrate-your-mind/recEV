"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint no-use-before-define: 0 */ // --> OFF
require("reflect-metadata");
require("./lib/env");
// import errorReporter from './lib/errors';
const type_graphql_1 = require("type-graphql");
const graphql_yoga_1 = require("graphql-yoga");
const mongoose_1 = require("mongoose");
const each_1 = __importDefault(require("lodash/each"));
const CharityResolver_1 = __importDefault(require("./resolvers/CharityResolver"));
const ;
this;
number[] = each_1.default([1,]);
async function bootstrap() {
    try {
        const schema = await type_graphql_1.buildSchema({
            resolvers: [CharityResolver_1.default],
            emitSchemaFile: true,
        });
        const mongoose = await mongoose_1.connect(encodeURI(process.env.MONGO_DB), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }); //Implementing type assertion for environment variables is important or else ts with throw an error
        const server = new graphql_yoga_1.GraphQLServer({ schema });
        server.start(() => console.log('Server is running on http://localhost:4000'));
    }
    catch (err) {
        return Promise.reject(new Error(err));
    }
}
bootstrap();
//# sourceMappingURL=index.js.map