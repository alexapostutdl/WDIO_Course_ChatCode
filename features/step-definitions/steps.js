import { Given, When, Then } from '@wdio/cucumber-framework';
import { tests } from '../support/tests';


Given ("The user opens the chat Page", async()=>{
    await tests.chatTest.openChatPage()
})
When ("Assert user is connected to server", async()=>{
    await tests.chatTest.assertServerConnection()
})
When ("Set {word} and connect", async(nickname1)=>{
    await tests.chatTest.setNickname(nickname1)
    await tests.chatTest.connect()
})
When ("Send {word} first", async(message1)=>{
    await tests.chatTest.sendMessage(message1)
})
When ("Open new tab and connect with the second user {word}", async(nickname2)=>{
    await tests.chatTest.secondUserConnect(nickname2)
})
When ("Second user sends {word}", async(message2)=>{
    await tests.chatTest.secondUserMessage(message2)
})
When ("Switch to first tab", async()=> {
    await tests.chatTest.switchToFirstTab()
})
When ("Assert {word} sent {word} is visible", async(nickname2, message2)=>{
    await tests.chatTest.assertSecondUserMessage(nickname2, message2)
})
Then ("Disconnect and assert the first user is not in the list anymore", async()=>{

})