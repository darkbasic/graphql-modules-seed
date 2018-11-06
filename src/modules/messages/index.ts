import { GraphQLModule } from '@graphql-modules/core';
import { loadResolversFiles, loadSchemaFiles } from '@graphql-modules/sonar';
import { mergeGraphQLSchemas, mergeResolvers } from '@graphql-modules/epoxy';
import { MessagesProvider } from "@modules/messages/providers/messages.provider";
import { CommonModule } from "@modules/common";
import { ChatsModule } from "@modules/chats";

export const MessagesModule = new GraphQLModule({
  imports: () => [
    CommonModule.forChild(),
    ChatsModule,
  ],
  providers: [
    MessagesProvider,
  ],
  typeDefs: mergeGraphQLSchemas(loadSchemaFiles(__dirname + '/schema/')),
  resolvers: mergeResolvers(loadResolversFiles(__dirname + '/resolvers/')),
});