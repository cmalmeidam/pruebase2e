Feature: Create page
  @user1 @web
  Scenario: I want to login
    Given I navigate to page "http://ec2-3-16-149-96.us-east-2.compute.amazonaws.com:2368/ghost/#/posts"
    Given I login
    Then I wait for 2 seconds
    Then I click on element having css selector ".gh-btn.gh-btn-green.ember-view"
    Then I wait for 2 seconds
    Then I click on element having css selector ".gh-editor-title.ember-text-area.gh-input.ember-view"
    Then I wait for 2 seconds
    Then I enter "Prueba Ghost" into input field having css selector ".gh-editor-title.ember-text-area.gh-input.ember-view"
    Then I wait for 2 seconds
    Then I type an emoji
    Then I wait for 2 seconds
    Then I click on element having css selector ".koenig-editor__editor-wrapper"
    Then I wait for 2 seconds
    Then I click on element having css selector ".gh-publishmenu-trigger"
    Then I wait for 2 seconds
    Then I click on element having css selector ".gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view"
    Then I wait for 5 seconds