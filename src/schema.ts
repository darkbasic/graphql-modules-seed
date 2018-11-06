import 'reflect-metadata';
import { makeExecutableSchema } from 'graphql-tools';
import { AppModule } from '@modules/app';

// Ask for typeDefs without all schema with business logi
const { typeDefs } = AppModule;
export default makeExecutableSchema({
  typeDefs
});
