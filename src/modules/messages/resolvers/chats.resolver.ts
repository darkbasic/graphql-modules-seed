import { MessagesProvider } from "@modules/messages/providers/messages.provider";
import { ChatResolvers } from "@models";

export const Chat: ChatResolvers.Resolvers = {
  messages: (chat: any, args, { injector }) =>
    injector.get(MessagesProvider).getMessages(chat.id),
};
