import { ChatsProvider } from "../providers/chats.provider";
import { IResolvers } from "@models";

export default {
  Query: {
    chats: (root, args, { injector }) =>
      injector.get(ChatsProvider).getChats(),
    chat: (root, {id}: any, { injector }) =>
      injector.get(ChatsProvider).getChat(id),
  },
} as IResolvers;
