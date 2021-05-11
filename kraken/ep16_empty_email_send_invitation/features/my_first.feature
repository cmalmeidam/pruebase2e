Feature: Create page
  @user1 @web
  Scenario: I want to login
    Given I navigate to page "http://localhost:2368/ghost/#/staff"
    Given I login
    Then I wait for 10 seconds
    Then I click on element having css selector ".gh-btn.gh-btn-green"
    Then I wait for 10 seconds
    Then I click on element having css selector ".gh-btn.gh-btn-green.gh-btn-icon.ember-view"