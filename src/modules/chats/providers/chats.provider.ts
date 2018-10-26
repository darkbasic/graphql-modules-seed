import { injectable, inject, ModuleConfig } from '@graphql-modules/core';
import { ChatsModuleConfig } from "../index";

@injectable()
export class ChatsProvider {

  constructor(
    @inject(ModuleConfig('chats')) private config: ChatsModuleConfig,
  ) {}

  getChats(): any {
    return this.config.chats;
  }

  getChat(id: number): any {
    return this.config.chats.find(chat => chat.id === id);
  }

  createChat(chat: any): any {
    const id = this.config.chats[this.config.chats.length-1].id + 1;

    const newChat = {
      id,
      ...chat,
    };

    this.config.chats = [ ...this.config.chats, newChat ];

    return newChat;
  }

  deleteChat(id: number): number {
    this.config.messages = this.config.messages.filter(message => message.chatId !== id);
    this.config.chats = this.config.chats.filter(chat => chat.id !== id);

    return id;
  }
}