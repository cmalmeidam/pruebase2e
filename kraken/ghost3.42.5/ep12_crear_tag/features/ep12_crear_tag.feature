Feature: Create Tag
  @user1 @web
  Scenario: As a user I want to create a tag
    Given I navigate to page "http://ec2-3-15-143-31.us-east-2.compute.amazonaws.com:2368/ghost/#/tags"
    Given I try to login
    Then I wait for 3 seconds
    Then I click on element having css selector ".ember-view.gh-btn.gh-btn-green"
    Then I wait for 3 seconds
    Then I enter "Nombre tag" into input field having id "tag-name"
    Then I wait for 3 seconds
    Then I click expand button
    Then I wait for 3 seconds
    Then I enter "meta-nombre" into input field having id "meta-title"
    Then I wait for 3 seconds
    Then I enter "Descripción tag" into input field having id "tag-description"
    Then I wait for 3 seconds
    Then I enter "Descripción metadato" into input field having id "meta-description"
    Then I wait for 3 seconds
    Then I click on element having css selector ".gh-btn.gh-btn-blue.gh-btn-icon.ember-view"
    Then I wait for 3 seconds
    Then I click on element having xpath "//h2[contains(.,'Nuevo tag')]"
    Then I wait for 3 seconds