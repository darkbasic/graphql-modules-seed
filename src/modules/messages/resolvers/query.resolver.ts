import { AppContext } from '@graphql-modules/core';
import { MessagesProvider } from "../providers/messages.provider";
import { MessageDbObject } from "../../../generated-models";

export default {
  Query: {
    messages: (root, {chatId}: any, { injector }: AppContext): MessageDbObject[] =>
      injector.get<MessagesProvider>(MessagesProvider).getMessages(chatId),
    message: (root, {id}: any, { injector }: AppContext): MessageDbObject =>
      injector.get<MessagesProvider>(MessagesProvider).getMessage(id),
  },
};
