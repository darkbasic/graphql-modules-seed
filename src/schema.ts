import 'reflect-metadata';
import { makeExecutableSchema } from 'graphql-tools';
import { appModule } from '@modules/app';

const { typeDefs } = appModule;
export default makeExecutableSchema({
  typeDefs
});
