Feature: Create Page With Emojis
  @user1 @web
  Scenario: As a user I want to create a page with emojis on its title
    Given I navigate to page "http://ec2-3-15-143-31.us-east-2.compute.amazonaws.com:2368/ghost/#/pages"
    Given I try to login
    Then I wait for 3 seconds
    Then I click on element having css selector ".gh-btn.gh-btn-green.ember-view"
    Then I wait for 3 seconds
    Then I enter "$name_1" into input field having css selector ".gh-editor-title.ember-text-area.gh-input.ember-view"
    Then I wait for 3 seconds
    Then I type an emoji
    Then I wait for 3 seconds
    Then I enter "$name_2" into input field having css selector ".koenig-editor__editor.__mobiledoc-editor.__has-no-content"
    Then I wait for 5 seconds
    Then I click on element having css selector ".koenig-editor__editor-wrapper"
    Then I wait for 2 seconds
    Then I click on element having css selector ".gh-publishmenu-trigger"
    Then I wait for 2 seconds
    Then I click on element having css selector ".gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view"
    Then I wait for 5 seconds