import { ChatsProvider } from "../providers/chats.provider";
import { IResolvers } from "@models";

export default {
  Mutation: {
    createChat: (root, {title, description}, { injector }) =>
      injector.get(ChatsProvider).createChat({title, description}),
    deleteChat: (root, {id}, { injector }) =>
      injector.get(ChatsProvider).deleteChat(id),
  },
} as IResolvers;
