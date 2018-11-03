import { GraphQLModule } from '@graphql-modules/core';
import { loadResolversFiles, loadSchemaFiles } from '@graphql-modules/sonar';
import { mergeGraphQLSchemas, mergeResolvers } from '@graphql-modules/epoxy';
import { messagesModule } from "@modules/messages";
import { commonModule } from "@modules/common";
import { ChatsProvider } from "@modules/chats/providers/chats.provider";

export const chatsModule = new GraphQLModule({
  name: 'chats',
  imports: [
    commonModule.forChild(),
    messagesModule,
  ],
  providers: [
    ChatsProvider,
  ],
  typeDefs: mergeGraphQLSchemas(loadSchemaFiles(__dirname + '/schema/')),
  resolvers: mergeResolvers(loadResolversFiles(__dirname + '/resolvers/')),
});