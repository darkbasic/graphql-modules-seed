import { ChatsProvider } from "@modules/chats/providers/chats.provider";
import { IResolvers } from "@models";

export default {
  Message: {
    chat: (message, args, { injector }) =>
      injector.get(ChatsProvider).getChat(message.chatId),
  },
} as IResolvers;
