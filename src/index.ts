import 'reflect-metadata';
import { GraphQLModule } from '@graphql-modules/core';
import { ApolloServer } from 'apollo-server';
import { chatsModule } from "@modules/chats";
import { messagesModule } from "@modules/messages";
import { commonModule } from "@modules/common";

export const chats = [
  {
    id: 1,
    title: "My first chat",
    description: "Just a chat",
    messageIds: [2, 4],
  },
  {
    id: 2,
    title: "My second chat",
    description: "Yet another chat",
    messageIds: [1, 3],
  },
];

export const messages = [
  {
    id: 1,
    chatId: 1,
    content: "Hi Kamil, how are you?",
  },
  {
    id: 2,
    chatId: 2,
    content: "Do you use graphql-code-generator?",
  },
  {
    id: 3,
    chatId: 1,
    content: "I'm fine, thanks :)",
  },
  {
    id: 4,
    chatId: 2,
    content: "Yes, I do!",
  },
];

const { schema, context } = new GraphQLModule({
  name: 'app',
  imports: [
    commonModule.forRoot({
      chats,
      messages,
    }),
    chatsModule,
    messagesModule,
  ],
});

const serverConfig = {
  introspection: true,
  schema,
  context,
};

const server = new ApolloServer(serverConfig);

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});