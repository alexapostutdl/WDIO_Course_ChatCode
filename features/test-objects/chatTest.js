import { pages } from "../support/pages";
let firstTab;
export class ChatTest{

    async openChatPage(){
        await browser.url('https://demos.mqtt.cool/chat/')
    }

    async assertServerConnection(){
        await pages.chatPage.assertSuccessConnection().waitForDisplayed()
        await expect(pages.chatPage.assertSuccessConnection()).toHaveText('Connected to the MQTT.Cool server')
    }

    async setNickname(nickname){
        await pages.chatPage.getNicknameInputField().setValue(nickname)
    }
    async connect(){
        await pages.chatPage.getConnectionButton().click()
    }

    async sendMessage(message){
        await browser.pause(3000)
        await pages.chatPage.getMessageInputField().waitForClickable()
        await pages.chatPage.getMessageInputField().setValue(message)
        await pages.chatPage.getSendMessageButton().click()
        firstTab = await browser.getWindowHandle()
    }

    async secondUserConnect(nickname){
        await browser.pause(3000)
        await browser.newWindow('https://demos.mqtt.cool/chat/')
        await pages.chatPage.assertSuccessConnection().waitForDisplayed()
        await pages.chatPage.getNicknameInputField().setValue(nickname)
        await pages.chatPage.getConnectionButton().click()
        await browser.pause(3000)
    }

    async secondUserMessage(message){
        await pages.chatPage.getMessageInputField().setValue(message)
        await pages.chatPage.getSendMessageButton().click()
    }

    async switchToFirstTab(){
        await browser.switchToWindow(firstTab)
        await browser.pause(3000)
    }

    async assertSecondUserMessage(nickname2, message2){
        await pages.chatPage.getUserMessage(nickname2, message2).isExisting()
         
    }

}