Feature: Create Tag With Emojis
  @user1 @web
  Scenario: As a user I want to create a tag with emojis
    Given I navigate to page "http://ec2-13-58-252-44.us-east-2.compute.amazonaws.com:2368/ghost/#/tags"
    Given I try to login
    Then I wait for 3 seconds
    Then I click on element having css selector ".ember-view.gh-btn.gh-btn-green"
    Then I wait for 3 seconds
    Then I enter "Nombre tag" into input field having id "tag-name"
    Then I wait for 3 seconds
    Then I type an emoji in name
    Then I wait for 3 seconds
    Then I enter "meta-nombre" into input field having id "meta-title"
    Then I wait for 3 seconds
    Then I enter "Descripción tag" into input field having id "tag-description"
    Then I wait for 3 seconds
    Then I type an emoji in description
    Then I wait for 3 seconds
    Then I enter "Descripción metadato" into input field having id "meta-description"
    Then I wait for 3 seconds
    Then I click on element having css selector ".gh-btn.gh-btn-blue.gh-btn-icon.ember-view"
    Then I wait for 3 seconds
    Then I click on element having xpath "//h2[contains(.,'Nombre tag ')]"
    Then I wait for 3 seconds
    Given I navigate to page "http://ec2-13-58-252-44.us-east-2.compute.amazonaws.com:2368/ghost/#/tags"
    Then I click on element having css selector ".gh-list-row.gh-tags-list-item.ember-view"
    Then I wait for 3 seconds
    Then I click on element having css selector ".gh-btn.gh-btn-red.gh-btn-icon.mb15"
    Then I wait for 3 seconds
    Then I click on element having css selector ".gh-btn.gh-btn-red.gh-btn-icon.ember-view"
    Then I wait for 3 seconds