import { GraphQLModule } from "@graphql-modules/core";

import { commonModule } from "./common";

import { chatsModule } from "./chats";

import { messagesModule } from "./messages";

export const appModule = new GraphQLModule({
    imports: ({ chats, messages}) => [
        commonModule.forRoot({
            chats,
            messages,
        }),
        chatsModule,
        messagesModule,
    ],
});