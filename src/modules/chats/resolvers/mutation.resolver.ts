import { ChatsProvider } from "../providers/chats.provider";
import { MutationResolvers } from "@models";

export const Mutation: MutationResolvers.Resolvers = {
  createChat: (root, { title, description }, { injector }) =>
    injector.get(ChatsProvider).createChat({ title, description }),
  deleteChat: (root, { id }, { injector }) =>
    injector.get(ChatsProvider).deleteChat(id),
};


