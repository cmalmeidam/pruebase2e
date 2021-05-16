Feature: Eliminar Post
  @user1 @web
  Scenario:  I want to delete a post
    Given I navigate to page "http://ec2-13-58-252-44.us-east-2.compute.amazonaws.com:2368/ghost/#/posts/"  
    Given I login
    Then I wait for 3 seconds   
    Then I click on element having css selector ".permalink.gh-list-data.gh-post-list-title.ember-view"
    Then I click on element having css selector ".post-settings"
    Then I click on element having css selector ".gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button"    
    Then I click on element having css selector ".gh-btn.gh-btn-red.gh-btn-icon.ember-view"
    Then I wait for 3 seconds