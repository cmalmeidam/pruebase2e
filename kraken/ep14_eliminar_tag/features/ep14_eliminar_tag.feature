Feature: Delete Tag
  @user1 @web
  Scenario: As a user I want to delete a tag
    Given I navigate to page "http://ec2-3-16-149-96.us-east-2.compute.amazonaws.com:2368/ghost/#/tags"
    Given I try to login
    Then I wait for 3 seconds
    Then I click on element having css selector ".gh-list-row.gh-tags-list-item.ember-view"
    Then I wait for 3 seconds
    Then I click on element having css selector ".gh-btn.gh-btn-red.gh-btn-icon.mb15"
    Then I wait for 3 seconds
    Then I click on element having css selector ".gh-btn.gh-btn-red.gh-btn-icon.ember-view"
    Then I wait for 3 seconds