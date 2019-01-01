import 'reflect-metadata';
import { AppModule } from './modules/app';
import { ApolloServer } from 'apollo-server';

const chats = [
  {
    id: 1,
    title: "My first chat",
    description: "Just a chat",
  },
  {
    id: 2,
    title: "My second chat",
    description: "Yet another chat",
  },
];

const messages = [
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

const { schema, context } = AppModule.forRoot({
  chats,
  messages,
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