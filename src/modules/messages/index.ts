import { GraphQLModule } from '@graphql-modules/core';
import { loadResolversFiles, loadSchemaFiles } from '@graphql-modules/sonar';
import { mergeGraphQLSchemas, mergeResolvers } from '@graphql-modules/epoxy';
import { ChatsProvider } from "@modules/chats/providers/chats.provider";

export interface MessagesModuleConfig {
  messages: any[];
  chats: any[];
}

// @ts-ignore
export const messagesModule = new GraphQLModule<MessagesModuleConfig>({
  name: 'messages',
  providers: [
    ChatsProvider,
  ],
  typeDefs: mergeGraphQLSchemas(loadSchemaFiles(__dirname + '/schema/')),
  resolvers: mergeResolvers(loadResolversFiles(__dirname + '/resolvers/')),
});