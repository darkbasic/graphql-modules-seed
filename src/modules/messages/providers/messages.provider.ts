import { injectable, inject, ModuleConfig } from '@graphql-modules/core';
import { MessagesModuleConfig } from "../index";

@injectable()
export class MessagesProvider {

  constructor(
    @inject(ModuleConfig('messages')) private config: MessagesModuleConfig,
  ) {}

  getMessages(chatId: number): any {
    return this.config.messages.filter(message => message.chatId === chatId);
  }

  getMessage(id: number): any {
    return this.config.messages.find(message => message.id === id);
  }

  createMessage(content: string, chatId: number): any {
    const id = this.config.messages[this.config.messages.length-1].id + 1;

    const newMessage = {id, chatId, content};

    this.config.messages = [...this.config.messages, newMessage];

    this.config.chats = this.config.chats.map(chat => chat.id !== chatId ? chat : {
      ...chat,
      messages: [...chat.messages, newMessage],
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