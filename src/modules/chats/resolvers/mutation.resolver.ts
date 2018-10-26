import { AppContext } from '@graphql-modules/core';
import { ChatsProvider } from "../providers/chats.provider";

export default {
  Mutation: {
    createChat: (root, {title, description}: any, { injector }: AppContext) =>
      injector.get<ChatsProvider>(ChatsProvider).createChat({title, description}),
    deleteChat: (root, {id}: any, { injector }: AppContext) =>
      injector.get<ChatsProvider>(ChatsProvider).deleteChat(id),
  },
};
