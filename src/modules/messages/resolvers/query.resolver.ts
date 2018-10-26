import { AppContext } from '@graphql-modules/core';
import { MessagesProvider } from "../providers/messages.provider";

export default {
  Query: {
    messages: (root, {chatId}: any, { injector }: AppContext) =>
      injector.get<MessagesProvider>(MessagesProvider).getMessages(chatId),
    message: (root, {id}: any, { injector }: AppContext) =>
      injector.get<MessagesProvider>(MessagesProvider).getMessage(id),
  },
};
