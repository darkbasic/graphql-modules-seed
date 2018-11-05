import { ModuleContext } from "@graphql-modules/core";
import { MessagesProvider } from "@modules/messages/providers/messages.provider";
import { MessageDbObject } from "@models";

export default {
  Chat: {
    messages: (chat: any, args, { injector }: ModuleContext): MessageDbObject[] =>
      injector.get<MessagesProvider>(MessagesProvider).getMessages(chat.id),
  },
};
