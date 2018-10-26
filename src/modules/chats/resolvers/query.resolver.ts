import { AppContext } from '@graphql-modules/core';
import { ChatsProvider } from "../providers/chats.provider";

export default {
  Query: {
    chats: (root, args, { injector }: AppContext) =>
      injector.get<ChatsProvider>(ChatsProvider).getChats(),
    chat: (root, {id}: any, { injector }: AppContext) =>
      injector.get<ChatsProvider>(ChatsProvider).getChat(id),
  },
};
