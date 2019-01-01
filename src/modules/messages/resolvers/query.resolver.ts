import { MessagesProvider } from "../providers/messages.provider";
import { IResolvers } from "@models";

export default {
  Query: {
    messages: (root, {chatId}, { injector }) =>
      injector.get(MessagesProvider).getMessages(chatId),
    message: (root, {id}, { injector }) =>
      injector.get(MessagesProvider).getMessage(id),
  },
} as IResolvers;
