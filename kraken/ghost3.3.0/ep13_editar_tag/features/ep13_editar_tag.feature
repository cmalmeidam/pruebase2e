Feature: Edit Tag
  @user1 @web
  Scenario: As a user I want to edit a tag
    Given I navigate to page "http://ec2-13-58-252-44.us-east-2.compute.amazonaws.com:2368/ghost/#/tags"
    Given I try to login
    Then I wait for 3 seconds
    Then I click on element having css selector ".gh-list-row.gh-tags-list-item.ember-view"
    Then I wait for 3 seconds
    Then I enter " cambio" into input field having id "tag-name"
    Then I wait for 3 seconds
    Then I enter " cambio" into input field having id "tag-description"
    Then I wait for 3 seconds
    Then I click on element having css selector ".gh-btn.gh-btn-blue.gh-btn-icon.ember-view"
    Then I wait for 3 seconds
    Given I navigate to page "http://ec2-13-58-252-44.us-east-2.compute.amazonaws.com:2368/ghost/#/tags"
    Then I click on element having css selector ".gh-list-row.gh-tags-list-item.ember-view"
    Then I click on element having xpath "//h2[contains(.,' cambio')]"
    Then I wait for 3 seconds