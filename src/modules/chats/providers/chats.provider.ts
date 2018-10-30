import { injectable, inject, ModuleConfig } from '@graphql-modules/core';
import { ChatsModuleConfig } from "../index";
import { ChatDbObject } from "../../../generated-models";

@injectable()
export class ChatsProvider {

  constructor(
    @inject(ModuleConfig('chats')) private config: ChatsModuleConfig,
  ) {}

  getChats(): ChatDbObject[] {
    return this.config.chats;
  }

  getChat(id: number): ChatDbObject {
    return this.config.chats.find(chat => chat.id === id);
  }

  createChat(chat: any): ChatDbObject {
    const id = this.config.chats[this.config.chats.length-1].id + 1;

    const newChat: ChatDbObject = {
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