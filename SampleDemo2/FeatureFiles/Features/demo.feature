Feature: Free CRM Login Feature


#without Examples Keyword heloo wvrb
Scenario: Free CRM Login Test Scenario

Given user is already on Login Page

When title of login page is Free CRM
Then user enters username and password
Then user clicks on login button
Then user checks for success message
Then close the browser