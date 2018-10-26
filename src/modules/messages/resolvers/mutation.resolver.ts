import { AppContext } from '@graphql-modules/core';
import { MessagesProvider } from "../providers/messages.provider";

export default {
  Mutation: {
    createMessage: (root, {content, chatId}: any, { injector }: AppContext) =>
      injector.get<MessagesProvider>(MessagesProvider).createMessage(content, chatId),
    deleteMessage: (root, {id}: any, { injector }: AppContext) =>
      injector.get<MessagesProvider>(MessagesProvider).deleteMessage(id),
  },
};
