import { GraphQLModule } from '@graphql-modules/core';
import { loadResolversFiles, loadSchemaFiles } from '@graphql-modules/sonar';
import { mergeGraphQLSchemas, mergeResolvers } from '@graphql-modules/epoxy';
import { MessagesProvider } from "@modules/messages/providers/messages.provider";
import { commonModule } from "@modules/common";
import { chatsModule } from "@modules/chats";

export const messagesModule = new GraphQLModule({
  imports: () => [
    commonModule.forChild(),
    chatsModule,
  ],
  providers: [
    MessagesProvider,
  ],
  typeDefs: mergeGraphQLSchemas(loadSchemaFiles(__dirname + '/schema/')),
  resolvers: mergeResolvers(loadResolversFiles(__dirname + '/resolvers/')),
});