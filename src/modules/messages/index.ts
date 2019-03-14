import { GraphQLModule } from '@graphql-modules/core';
import { loadResolversFiles, loadSchemaFiles } from 'graphql-toolkit';
import { MessagesProvider } from "@modules/messages/providers/messages.provider";
import { CommonModule } from "@modules/common";
import { ChatsModule } from "@modules/chats";

export const MessagesModule = new GraphQLModule({
  imports: [
    CommonModule,
    ChatsModule,
  ],
  providers: [
    MessagesProvider,
  ],
  typeDefs: loadSchemaFiles(__dirname + '/schema/'),
  resolvers: loadResolversFiles(__dirname + '/resolvers/'),
});
