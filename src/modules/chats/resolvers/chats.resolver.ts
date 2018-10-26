import { AppContext } from "@graphql-modules/core";
import { MessagesProvider } from "../../messages/providers/messages.provider";

export default {
  Chat: {
    messages: (chat: any, args, { injector }: AppContext) =>
      injector.get<MessagesProvider>(MessagesProvider).getMessages(chat.id),
  },
};
