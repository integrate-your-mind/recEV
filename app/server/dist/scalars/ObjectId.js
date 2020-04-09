"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const mongodb_1 = require("mongodb");
exports.ObjectIdScalar = new graphql_1.GraphQLScalarType({
    name: 'ObjectId',
    description: 'MongoDB ObjectId scalar type',
    parseValue(value) {
        return new mongodb_1.ObjectId(value);
    },
    serialize(value) {
        return value.toHexString();
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    parseLiteral(ast) {
        if (ast.kind === graphql_1.Kind.STRING) {
            return new mongodb_1.ObjectId(ast.value);
        }
        return null;
    },
});
//# sourceMappingURL=ObjectId.js.map