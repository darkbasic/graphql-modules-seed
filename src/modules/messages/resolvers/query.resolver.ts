import { MessagesProvider } from "../providers/messages.provider";
import { QueryResolvers } from "@models";

export const Query: QueryResolvers.Resolvers = {
  messages: (root, { chatId }, { injector }) =>
    injector.get(MessagesProvider).getMessages(chatId),
  message: (root, { id }, { injector }) =>
    injector.get(MessagesProvider).getMessage(id),
};
