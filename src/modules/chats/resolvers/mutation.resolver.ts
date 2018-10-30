import { AppContext } from '@graphql-modules/core';
import { ChatsProvider } from "../providers/chats.provider";
import { ChatDbObject, CreateChatMutationArgs, DeleteChatMutationArgs } from "../../../generated-models";

export default {
  Mutation: {
    createChat: (root, {title, description}: CreateChatMutationArgs, { injector }: AppContext): ChatDbObject =>
      injector.get<ChatsProvider>(ChatsProvider).createChat({title, description}),
    deleteChat: (root, {id}: DeleteChatMutationArgs, { injector }: AppContext): number =>
      injector.get<ChatsProvider>(ChatsProvider).deleteChat(id),
  },
};
