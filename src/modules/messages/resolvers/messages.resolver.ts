import { AppContext } from "@graphql-modules/core";
import { ChatsProvider } from "../../chats/providers/chats.provider";

export default {
  Message: {
    chat: (message: any, args, { injector }: AppContext) =>
      injector.get<ChatsProvider>(ChatsProvider).getChat(message.chatId),
  },
};
