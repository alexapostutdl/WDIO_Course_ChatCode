export class ChatPage{
        assertSuccessConnection(){
            return $('.text-success')
        }
    
        getNicknameInputField(){
            return $('#user')
        }
    
        getConnectionButton(){
            return $('#connectBtn')
        }
    
        getMessageInputField(){
            return $('#sendMessage')
        }
    
        assertJoinChat( userName){
            return $(`//div[text()="${userName} has joined the chat"]`)
        }
    
        assertUserName( userName){
            return $(`//*[@id=''userList]//*[contains(text(), "${userName}")]`)
        }
    
        chatInputField (){
            return $('#sendMessage')
        }
    
        getSendMessageButton(){
            return $('#replyBtn')
        }
    
        getUserMessage(nickname2, message2){
            return $(`//div[text()="${nickname2}: ${message2}"]`)
        }
    
        getDisconnectButton(){
            return $('#disconnectBtn')
        }
    
        assertUserDisconnectChat( userName){
            return $(`//div[text()="${userName} has disconnected"]`)
        }
    

}