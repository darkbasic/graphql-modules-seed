import { GraphQLModule } from "@graphql-modules/core";

import { CommonModule } from "./common";
import { ChatsModule } from "./chats";
import { MessagesModule } from "./messages";

export const AppModule = new GraphQLModule({
    imports: ({ config: { chats, messages} }) => [
        CommonModule.forRoot({
            chats,
            messages,
        }),
        ChatsModule,
        MessagesModule,
    ],
    configRequired: true,
});