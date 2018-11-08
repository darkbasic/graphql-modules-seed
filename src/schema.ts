import 'reflect-metadata';
import { makeExecutableSchema } from 'graphql-tools';
import { AppModule } from '@modules/app';
import { printSchema } from 'graphql';

// Ask for typeDefs without all schema with business logi
const { typeDefs } = AppModule;

const schema = makeExecutableSchema({
  typeDefs: [typeDefs],
});

console.log(printSchema(schema));

export default schema;
