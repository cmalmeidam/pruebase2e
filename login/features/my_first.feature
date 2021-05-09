Feature: Create user for the first time

  @user1 @web
  Scenario: As a first user I say hi to a second user
    Given I navigate to page "http://localhost:2368/ghost/"
    When I click on element having css selector ".gh-btn"
      And I enter "$name_1" into input field having id "blog-title"
      And I enter "$name_2" into input field having id "name"
      And I enter "<USER>" into input field having id "email"
      And I enter "$name_3" into input field having id "name"
      And I enter "<PASSWORD>" into input field having id "password"
      And I click on element having css selector ".gh-btn"
      And I click on element having css selector ".gh-flow-skip"
    Then I send a signal to user 2 containing "hi"

  @user2 @web
  Scenario: As a second user I wait for user 1 to say hi
    Given I wait for a signal containing "hi" for 60 seconds
    When I navigate to page "http://localhost:2368/ghost/"
      And I enter "<USER>" into input field having id "ember8"
      And I enter "<PASSWORD>" into input field having id "ember10"
      And I click on element having id "ember12"
    Then I should see text "Ghost Admin"

