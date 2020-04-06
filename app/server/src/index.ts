/* eslint no-use-before-define: 0 */ // --> OFF
import { GraphQLServer } from 'graphql-yoga';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import CharityResolver from './resolvers/CharityResolver';

async function bootstrap(): Promise<void> {
  const schema = await buildSchema({
    resolvers: [CharityResolver],
    emitSchemaFile: true,
  });

  const server = new GraphQLServer({ schema });

  server.start(() => console.log('Server is running on http://localhost:4000'));
}

bootstrap();
