import { GraphQLModule } from '@graphql-modules/core';
import { loadResolversFiles, loadSchemaFiles } from '@graphql-modules/sonar';
import { mergeGraphQLSchemas, mergeResolvers } from '@graphql-modules/epoxy';
import { CommonModule } from "@modules/common";
import { ChatsProvider } from "@modules/chats/providers/chats.provider";

export const ChatsModule = new GraphQLModule({
  imports: [
    CommonModule.forChild()
  ],
  providers: [
    ChatsProvider,
  ],
  typeDefs: mergeGraphQLSchemas(loadSchemaFiles(__dirname + '/schema/')),
  resolvers: mergeResolvers(loadResolversFiles(__dirname + '/resolvers/')),
});