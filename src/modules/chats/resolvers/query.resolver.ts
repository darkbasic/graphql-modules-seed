import { AppContext } from '@graphql-modules/core';
import { ChatsProvider } from "../providers/chats.provider";
import { ChatDbObject } from "../../../generated-models";

export default {
  Query: {
    chats: (root, args, { injector }: AppContext): ChatDbObject[] =>
      injector.get<ChatsProvider>(ChatsProvider).getChats(),
    chat: (root, {id}: any, { injector }: AppContext): ChatDbObject =>
      injector.get<ChatsProvider>(ChatsProvider).getChat(id),
  },
};
