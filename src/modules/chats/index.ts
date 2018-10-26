import { GraphQLModule } from '@graphql-modules/core';
import { loadResolversFiles, loadSchemaFiles } from '@graphql-modules/sonar';
import { mergeGraphQLSchemas, mergeResolvers } from '@graphql-modules/epoxy';

export interface ChatsModuleConfig {
  chats: any[];
  messages: any[];
}

// @ts-ignore
export const chatsModule = new GraphQLModule<ChatsModuleConfig>({
  name: 'chats',
  dependencies: ['messages'],
  providers: [],
  typeDefs: mergeGraphQLSchemas(loadSchemaFiles(__dirname + '/schema/')),
  resolvers: mergeResolvers(loadResolversFiles(__dirname + '/resolvers/')),
});