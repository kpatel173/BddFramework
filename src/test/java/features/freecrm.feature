#Author: krupss2002@gmail.com
#Keywords Summary : FreeCRM Project 


Feature: FreeCRM Website Actions
  

  @Smoke
  Scenario: Login to the App
    Given User is on login page 
    When page title is "Cogmento CRM"
    Then user enters valid "krupss2002@gmail.com" and "Test@123"
    Then user clicks on login button
    Then verify user is on home page 
    Then user quit
   

  @Regression
	Scenario Outline: Try Login with invalid input
    Given User is on login page 
    When page title is "Cogmento CRM"
    Then user enters invalid  "<username>" and "<password>"
    Then user clicks on login button
    Then verify Error Message 
    Then user quit
    
    Examples: 
      | username | password | 
      | jncjebdv | 3445df   | 
      | ncejkrn$ | cfevce   | 

   		
   		
   		