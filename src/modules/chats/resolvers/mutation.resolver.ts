import { ModuleContext } from '@graphql-modules/core';
import { ChatsProvider } from "../providers/chats.provider";
import { ChatDbObject, CreateChatMutationArgs, DeleteChatMutationArgs } from "@models";

export default {
  Mutation: {
    createChat: (root, {title, description}: CreateChatMutationArgs, { injector }: ModuleContext): ChatDbObject =>
      injector.get(ChatsProvider).createChat({title, description}),
    deleteChat: (root, {id}: DeleteChatMutationArgs, { injector }: ModuleContext): number =>
      injector.get(ChatsProvider).deleteChat(id),
  },
};
