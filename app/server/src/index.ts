/* eslint no-use-before-define: 0 */ // --> OFF
import 'reflect-metadata';
import './lib/env';
// import errorReporter from './lib/errors';
import { buildSchema } from 'type-graphql';
import { GraphQLServer } from 'graphql-yoga';
import { connect } from 'mongoose';

import CharityResolver from './resolvers/CharityResolver';

async function bootstrap(): Promise<void> {
  try {
    const schema = await buildSchema({
      resolvers: [CharityResolver],
      emitSchemaFile: true,
    });

    const mongoose: typeof import('mongoose') = await connect(encodeURI(process.env.MONGO_DB as string), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }); //Implementing type assertion for environment variables is important or else ts with throw an error
    const server = new GraphQLServer({ schema });

    server.start(() => console.log('Server is running on http://localhost:4000'));
  } catch (err) {
    return Promise.reject(new Error(err));
  }
}

bootstrap();
