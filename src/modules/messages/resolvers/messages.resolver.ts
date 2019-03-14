import { ChatsProvider } from "@modules/chats/providers/chats.provider";
import { MessageResolvers } from "@models";

export const Message: MessageResolvers.Resolvers = {
  chat: (message, args, { injector }) =>
    injector.get(ChatsProvider).getChat(message.chatId),
};
