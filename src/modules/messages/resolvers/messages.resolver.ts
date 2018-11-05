import { ModuleContext } from "@graphql-modules/core";
import { ChatsProvider } from "@modules/chats/providers/chats.provider";
import { ChatDbObject } from "@models";

export default {
  Message: {
    chat: (message: any, args, { injector }: ModuleContext): ChatDbObject =>
      injector.get<ChatsProvider>(ChatsProvider).getChat(message.chatId),
  },
};
