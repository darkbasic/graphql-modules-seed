import { MessagesProvider } from "@modules/messages/providers/messages.provider";
import { IResolvers } from "@models";

export default {
  Chat: {
    messages: (chat: any, args, { injector }) =>
      injector.get(MessagesProvider).getMessages(chat.id),
  },
} as IResolvers;
