import { ChatsProvider } from "../providers/chats.provider";
import { QueryResolvers } from "@models";

export const Query: QueryResolvers.Resolvers = {
  chats: (root, args, { injector }) =>
    injector.get(ChatsProvider).getChats(),
  chat: (root, { id }: any, { injector }) =>
    injector.get(ChatsProvider).getChat(id),
};
