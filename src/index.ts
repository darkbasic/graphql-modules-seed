import 'reflect-metadata';
import { AppModule } from './modules/app';
import * as express from 'express';
import * as graphqlHTTP from 'express-graphql';

const PORT = process.env.PORT || 4000;

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

const { schema } = AppModule.forRoot({
  chats,
  messages,
});

const app = express();

app.use(graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(PORT, () => {
  console.log(`Server ready at http://localhost:${PORT}`);
});