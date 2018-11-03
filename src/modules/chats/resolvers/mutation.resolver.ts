import { ModuleContext } from '@graphql-modules/core';
import { ChatsProvider } from "../providers/chats.provider";
import { ChatDbObject, CreateChatMutationArgs, DeleteChatMutationArgs } from "../../../generated-models";

export default {
  Mutation: {
    createChat: (root, {title, description}: CreateChatMutationArgs, { injector }: ModuleContext): ChatDbObject =>
      injector.get<ChatsProvider>(ChatsProvider).createChat({title, description}),
    deleteChat: (root, {id}: DeleteChatMutationArgs, { injector }: ModuleContext): number =>
      injector.get<ChatsProvider>(ChatsProvider).deleteChat(id),
  },
};
