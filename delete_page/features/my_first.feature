Feature: Delete Page

  @user1 @web
  Scenario: As a user I want to delete a page
    Given I navigate to page "http://localhost:2368/ghost/"
    Given I try to login
    Given I navigate to page "http://localhost:2368/ghost/#/pages"
    Then I wait for 5 seconds
    Then I click on element having xpath "//h3[contains(.,'pruebatitulomodificado')]"
    Then I wait for 5 seconds
    Then I click on element having css selector ".post-settings"
    Then I wait for 3 seconds
    Then I click on element having css selector ".settings-menu-delete-button"
    Then I wait for 3 seconds
    Then I click on element having css selector ".gh-btn-red"
    Then I wait for 5 seconds  
    Then I navigate to page "localhost:2368/pruebatitulo"
    Then I should see text "Page not found"