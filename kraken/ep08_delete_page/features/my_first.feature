Feature: Delete Page

  @user1 @web
  Scenario: As a user I want to delete a page
    Given I navigate to page "http://ec2-13-58-252-44.us-east-2.compute.amazonaws.com:2368/ghost/#/signin/"
    Given I try to login
    Given I navigate to page "http://ec2-13-58-252-44.us-east-2.compute.amazonaws.com:2368/ghost/#/pages"
    Then I click on element having css selector ".gh-btn.gh-btn-green.ember-view"
    Then I wait for 3 seconds
    Then I enter "pruebatituloeliminar" into input field having css selector ".gh-editor-title.ember-text-area.gh-input.ember-view"
    Then I wait for 3 seconds
    Then I enter "$name_2" into input field having css selector ".koenig-editor__editor.__mobiledoc-editor.__has-no-content"
    Then I wait for 3 seconds
    Then I click on element having css selector ".gh-btn.gh-btn-outline.gh-publishmenu-trigger"
    Then I wait for 3 seconds  
    Then I click on element having css selector ".gh-btn.gh-btn-blue.gh-publishmenu-button"
    Then I wait for 3 seconds
    Given I navigate to page "http://ec2-13-58-252-44.us-east-2.compute.amazonaws.com:2368/ghost/#/pages"
    Then I wait for 3 seconds
    Then I click on element having xpath "//h3[contains(.,'pruebatituloeliminar')]"
    Then I wait for 3 seconds
    Then I click on element having css selector ".post-settings"
    Then I wait for 3 seconds
    When I click on element having css selector ".settings-menu-delete-button"
    Then I wait for 3 seconds
    Then I click on element having css selector ".gh-btn-red"
    Then I wait for 3 seconds  
    Then I navigate to page "http://ec2-13-58-252-44.us-east-2.compute.amazonaws.com:2368/pruebatituloeliminar"
    Then I should see text "Page not found"