import { Inject, Injectable } from '@graphql-modules/di';
import { ChatDbObject, MessageDbObject } from "@models";
import { CHATS, MESSAGES } from "@modules/common";

@Injectable()
export class MessagesProvider {

  constructor(
    @Inject(MESSAGES) private messages: MessageDbObject[],
    @Inject(CHATS) private chats: ChatDbObject[],
  ) {}

  getMessages(chatId: number): MessageDbObject[] {
    return this.messages.filter(message => message.chatId === chatId);
  }

  getMessage(id: number): MessageDbObject {
    return this.messages.find(message => message.id === id);
  }

  createMessage(content: string, chatId: number): MessageDbObject {
    const id = this.messages[this.messages.length-1].id + 1;

    const newMessage: MessageDbObject = {id, chatId, content};

    this.messages = [...this.messages, newMessage];

    this.chats = this.chats.map(chat => chat.id !== chatId ? chat : {
      ...chat,
      messageIds: [...this.messages.filter(message => message.chatId === chat.id).map(message => message.id), newMessage.id],
    });

    return newMessage;
  }

  deleteMessage(id: number): number {
    const chatId = this.messages.find(message => message.id === id).chatId;
    this.messages.filter(message => message.id !== id);
    this.chats = this.chats.map(chat => chat.id !== chatId ? chat : {
      ...chat,
      messages: this.messages.filter(message => message.chatId === chat.id).map(message => message.id),
    });

    return id;
  }
}