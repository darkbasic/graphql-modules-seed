import { MessagesProvider } from "../providers/messages.provider";
import { IResolvers } from "@models";

export default {
  Mutation: {
    createMessage: (root, {content, chatId}, { injector }) =>
      injector.get(MessagesProvider).createMessage(content, chatId),
    deleteMessage: (root, {id}, { injector }) =>
      injector.get(MessagesProvider).deleteMessage(id),
  },
} as IResolvers;
