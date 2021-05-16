Feature: Publish Page

  @user1 @web
  Scenario: As a user I want to publish a page
    Given I navigate to page "http://ec2-3-15-143-31.us-east-2.compute.amazonaws.com:2368/ghost/#/pages"
    Given I try to login
    Then I wait for 3 seconds
    Then I click on element having css selector ".gh-btn.gh-btn-green.ember-view"
    Then I wait for 3 seconds
    Then I enter "$name_1" into input field having css selector ".gh-editor-title.ember-text-area.gh-input.ember-view"
    Then I wait for 3 seconds
    Then I enter "$name_2" into input field having css selector ".koenig-editor__editor.__mobiledoc-editor.__has-no-content"
    Then I wait for 3 seconds
    Then I click on element having css selector ".gh-btn.gh-btn-outline.gh-publishmenu-trigger"
    Then I wait for 3 seconds  
    Then I click on element having css selector ".gh-btn.gh-btn-blue.gh-publishmenu-button"
    Then I wait for 3 seconds
    Then I click on element having css selector ".gh-notification-content"
    Then I wait for 3 seconds
    Then I click on element having xpath "//div[contains(.,'Published')]"
    Then I wait for 3 seconds


