import { GraphQLScalarType, Kind } from 'graphql';
import { ObjectId } from 'mongodb';

export const ObjectIdScalar = new GraphQLScalarType({
  name: 'ObjectId',
  description: 'MongoDB ObjectId scalar type',
  parseValue(value: string): ObjectId {
    return new ObjectId(value);
  },
  serialize(value: ObjectId): string {
    return value.toHexString();
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  parseLiteral(ast): ObjectId | null {
    if (ast.kind === Kind.STRING) {
      return new ObjectId(ast.value);
    }
    return null;
  },
});
