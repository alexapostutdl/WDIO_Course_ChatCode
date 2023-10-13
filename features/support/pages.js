import { ChatPage } from "../page-objects/chatPage"



class Pages {
    constructor(){
        this.chatPage = new ChatPage()
    }
}

export const pages = new Pages()