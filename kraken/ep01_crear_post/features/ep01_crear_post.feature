Feature: Post
  @user1 @web
  Scenario: I want to create a post   
    Given I navigate to page "http://ec2-13-58-252-44.us-east-2.compute.amazonaws.com:2368/ghost/#/posts/"  
    Given I login
    Then I wait for 3 seconds
    Then I click on element having css selector ".gh-btn.gh-btn-green.ember-view"
    Then I enter "$name_1" into input field having css selector ".gh-editor-title.ember-text-area.gh-input.ember-view"
    Then I enter "$name2" into input field having css selector ".koenig-editor__editor.__mobiledoc-editor"
    Then I wait for 3 seconds
    Then I navigate to page "http://ec2-13-58-252-44.us-east-2.compute.amazonaws.com:2368/ghost/#/posts/"
    Then I wait for 3 seconds 
  @user2 @web
  Scenario: I want to edit a post  
    Given I navigate to page "http://ec2-13-58-252-44.us-east-2.compute.amazonaws.com:2368/ghost/#/posts/"  
    Given I login
    Then I wait for 3 seconds   
    Then I click on element having css selector ".permalink.gh-list-data.gh-post-list-title.ember-view"
    Then I enter "$name_1" into input field having css selector ".gh-editor-title.ember-text-area.gh-input.ember-view"
    Then I enter "$name2" into input field having css selector ".koenig-editor__editor.__mobiledoc-editor"
    Then I wait for 3 seconds
    Then I navigate to page "http://ec2-13-58-252-44.us-east-2.compute.amazonaws.com:2368/ghost/#/posts/"
    Then I wait for 3 seconds
  @user3 @web
  Scenario:  I want to delete a post
    Given I navigate to page "http://ec2-13-58-252-44.us-east-2.compute.amazonaws.com:2368/ghost/#/posts/"  
    Given I login
    Then I wait for 15 seconds   
    Then I click on element having css selector ".permalink.gh-list-data.gh-post-list-title.ember-view"
    Then I click on element having css selector ".post-settings"
    Then I click on element having css selector ".gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button"    
    Then I click on element having css selector ".gh-btn.gh-btn-red.gh-btn-icon.ember-view"
    Then I wait for 3 seconds
  @user4 @web
  Scenario: I want to unpublish a post
    Given I navigate to page "http://ec2-13-58-252-44.us-east-2.compute.amazonaws.com:2368/ghost/#/posts/"  
    Given I login
    Then I wait for 20 seconds   
    Then I click on element having css selector ".gh-content-status-published.nowrap"
    Then I wait for 3 seconds   
    Then I click on element having css selector ".gh-btn.gh-btn-outline.gh-publishmenu-trigger.ember-basic-dropdown-trigger.ember-view"
    Then I wait for 3 seconds
    Then I click on element having css selector ".gh-publishmenu-radio-button"
    Then I wait for 3 seconds
    Then I click on element having css selector ".gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view"
    Then I wait for 3 seconds
    Then I navigate to page "http://ec2-13-58-252-44.us-east-2.compute.amazonaws.com:2368/ghost/#/posts/"
    Then I wait for 3 seconds
  @user5 @web
  Scenario: I want to publish a post
    Given I navigate to page "http://ec2-13-58-252-44.us-east-2.compute.amazonaws.com:2368/ghost/#/posts/"  
    Given I login
    Then I wait for 30 seconds   
    Then I click on element having css selector ".gh-content-status-draft.gh-badge.gh-badge-purple.nowrap"
    Then I wait for 3 seconds   
    Then I click on element having css selector ".gh-btn.gh-btn-outline.gh-publishmenu-trigger.ember-basic-dropdown-trigger.ember-view"
    Then I wait for 3 seconds
    Then I click on element having css selector ".gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view"
    Then I wait for 3 seconds
    Then I navigate to page "http://ec2-13-58-252-44.us-east-2.compute.amazonaws.com:2368/ghost/#/posts/"
    Then I wait for 3 seconds