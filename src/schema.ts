import 'reflect-metadata';
import { makeExecutableSchema } from 'graphql-tools';
import { GraphQLModule } from "@graphql-modules/core";
import { commonModule } from "@modules/common";
import { chatsModule } from "@modules/chats";
import { messagesModule } from "@modules/messages";

const { typeDefs } = new GraphQLModule({
  imports: [
    commonModule.forRoot({
      chats: [],
      messages: [],
    }),
    chatsModule,
    messagesModule,
  ],
});
export default makeExecutableSchema({
  typeDefs
});