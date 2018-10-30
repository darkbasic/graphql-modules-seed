import { GraphQLModule } from '@graphql-modules/core';
import { loadResolversFiles, loadSchemaFiles } from '@graphql-modules/sonar';
import { mergeGraphQLSchemas, mergeResolvers } from '@graphql-modules/epoxy';
import { ChatsProvider } from "@modules/chats/providers/chats.provider";
import { ChatDbObject, MessageDbObject } from "../../generated-models";

export interface MessagesModuleConfig {
  messages: MessageDbObject[];
  chats: ChatDbObject[];
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