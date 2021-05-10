Feature: Create page
  @user1 @web
  Scenario: I want to login
    Given I navigate to page "http://localhost:2368/ghost/#/posts"
    Given I login
    Then I wait for 5 seconds
    Then I click on element having css selector ".gh-nav-btn-search"
    Then I wait for 5 seconds
    Then I search an user