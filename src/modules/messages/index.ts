import { GraphQLModule } from '@graphql-modules/core';
import { loadResolversFiles, loadSchemaFiles } from '@graphql-modules/sonar';
import { mergeGraphQLSchemas, mergeResolvers } from '@graphql-modules/epoxy';

export interface MessagesModuleConfig {
  messages: any[];
  chats: any[];
}

// @ts-ignore
export const messagesModule = new GraphQLModule<MessagesModuleConfig>({
  name: 'messages',
  providers: [],
  typeDefs: mergeGraphQLSchemas(loadSchemaFiles(__dirname + '/schema/')),
  resolvers: mergeResolvers(loadResolversFiles(__dirname + '/resolvers/')),
});