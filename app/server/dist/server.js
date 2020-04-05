"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_yoga_1 = require("graphql-yoga");
require("reflect-metadata");
const type_graphql_1 = require("type-graphql");
const CharityResolver_1 = __importDefault(require("./resolvers/CharityResolver"));
async function bootstrap() {
    const schema = await type_graphql_1.buildSchema({
        resolvers: [CharityResolver_1.default],
        emitSchemaFile: true,
    });
    const server = new graphql_yoga_1.GraphQLServer({
        schema,
    });
    server.start(() => console.log('Server is running on http://localhost:4000'));
}
bootstrap();
//# sourceMappingURL=server.js.map