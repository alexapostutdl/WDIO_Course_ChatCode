Feature: The Demo Chat Page

  Scenario Outline: Chat between 2 users

    Given The user opens the chat Page
    When Assert user is connected to server
    And Set <nickname1> and connect
    And Send <message1> first
    And Open new tab and connect with the second user <nickname2>
    And Second user sends <message2>
    And Switch to first tab
    And Assert <nickname2> sent <message2> is visible
    Then Disconnect and assert the first user is not in the list anymore


    Examples:
      |nickname1|message1|nickname2|message2|
      |user1|Nice|user2|Nice|
      
