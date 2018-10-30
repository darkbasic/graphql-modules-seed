import { injectable, inject, ModuleConfig } from '@graphql-modules/core';
import { MessagesModuleConfig } from "../index";
import { MessageDbObject } from "../../../generated-models";

@injectable()
export class MessagesProvider {

  constructor(
    @inject(ModuleConfig('messages')) private config: MessagesModuleConfig,
  ) {}

  getMessages(chatId: number): MessageDbObject[] {
    return this.config.messages.filter(message => message.chatId === chatId);
  }

  getMessage(id: number): MessageDbObject {
    return this.config.messages.find(message => message.id === id);
  }

  createMessage(content: string, chatId: number): MessageDbObject {
    const id = this.config.messages[this.config.messages.length-1].id + 1;

    const newMessage: MessageDbObject = {id, chatId, content};

    this.config.messages = [...this.config.messages, newMessage];

    this.config.chats = this.config.chats.map(chat => chat.id !== chatId ? chat : {
      ...chat,
      messageIds: [...chat.messageIds, newMessage.id],
    });

    return newMessage;
  }

  deleteMessage(id: number): number {
    const chatId = this.config.messages.find(message => message.id === id).chatId;
    this.config.messages.filter(message => message.id !== id);
    this.config.chats = this.config.chats.map(chat => chat.id !== chatId ? chat : {
      ...chat,
      messages: chat.messageIds.filter(messageId => messageId !== id),
    });

    return id;
  }
}