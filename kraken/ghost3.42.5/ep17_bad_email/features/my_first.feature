Feature: Bad Email Test
  @user1 @web
  Scenario: I want to login
    Given I navigate to page "http://ec2-3-15-143-31.us-east-2.compute.amazonaws.com:2368/ghost/#/staff"
    Given I login
    Then I wait for 10 seconds
    Then I click on element having css selector ".gh-btn.gh-btn-green"
    Then I wait for 10 seconds
    Then I click on element having css selector ".gh-btn.gh-btn-green.gh-btn-icon.ember-view"