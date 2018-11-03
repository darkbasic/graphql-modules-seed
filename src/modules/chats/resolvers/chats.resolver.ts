import { ModuleContext } from "@graphql-modules/core";
import { MessagesProvider } from "../../messages/providers/messages.provider";
import { MessageDbObject } from "../../../generated-models";

export default {
  Chat: {
    messages: (chat: any, args, { injector }: ModuleContext): MessageDbObject[] =>
      injector.get<MessagesProvider>(MessagesProvider).getMessages(chat.id),
  },
};
