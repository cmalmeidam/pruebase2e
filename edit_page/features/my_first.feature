Feature: Edit Page

  @user1 @web
  Scenario: As a user I want to edit a page
    Given I navigate to page "http://localhost:2368/ghost/"
    Given I try to login
    Given I navigate to page "http://localhost:2368/ghost/#/pages"
    Then I click on element having css selector ".gh-btn.gh-btn-green.ember-view"
    Then I wait for 5 seconds
    Then I enter "pruebatitulo" into input field having css selector ".gh-editor-title.ember-text-area.gh-input.ember-view"
    Then I wait for 5 seconds
    Then I enter "$name_2" into input field having css selector ".koenig-editor__editor.__mobiledoc-editor.__has-no-content"
    Then I wait for 5 seconds
    Then I click on element having css selector ".gh-btn.gh-btn-outline.gh-publishmenu-trigger"
    Then I wait for 5 seconds  
    Then I click on element having css selector ".gh-btn.gh-btn-blue.gh-publishmenu-button"
    Then I wait for 5 seconds
    Given I navigate to page "http://localhost:2368/ghost/#/pages"
    Then I click on element having xpath "//h3[contains(.,'pruebatitulo')]"
    Then I wait for 5 seconds
    Then I enter "modificado" into input field having css selector ".gh-editor-title.ember-text-area.gh-input.ember-view"
    Then I enter "$name2" into input field having css selector ".koenig-editor__editor.__mobiledoc-editor"
    Then I wait for 3 seconds
    Then I click on element having css selector ".gh-btn.gh-btn-outline.gh-publishmenu-trigger"
    Then I wait for 5 seconds  
    Then I click on element having css selector ".gh-btn.gh-btn-blue.gh-publishmenu-button"
    Then I wait for 5 seconds
    Then I click on element having css selector ".gh-notification-content"
    Then I wait for 10 seconds
    Then I navigate to page "localhost:2368/pruebatitulo"



