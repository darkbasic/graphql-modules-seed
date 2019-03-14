import { MessagesProvider } from "../providers/messages.provider";
import { MutationResolvers } from "@models";

export const Mutation: MutationResolvers.Resolvers = {
  createMessage: (root, { content, chatId }, { injector }) =>
    injector.get(MessagesProvider).createMessage(content, chatId),
  deleteMessage: (root, { id }, { injector }) =>
    injector.get(MessagesProvider).deleteMessage(id),
};
