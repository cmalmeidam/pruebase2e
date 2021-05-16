Feature:  Anular Publicación Post
  @user1 @web
  Scenario: I want to unpublish a post
    Given I navigate to page "http://ec2-3-15-143-31.us-east-2.compute.amazonaws.com:2368/ghost/#/posts/"  
    Given I login
    Then I wait for 3 seconds   
    Then I click on element having css selector ".gh-content-status-published.nowrap"
    Then I wait for 3 seconds   
    Then I click on element having css selector ".gh-btn.gh-btn-outline.gh-publishmenu-trigger.ember-basic-dropdown-trigger.ember-view"
    Then I wait for 3 seconds
    Then I click on element having css selector ".gh-publishmenu-radio-button"
    Then I wait for 3 seconds
    Then I click on element having css selector ".gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view"
    Then I wait for 3 seconds
    Then I navigate to page "http://ec2-3-15-143-31.us-east-2.compute.amazonaws.com:2368/ghost/#/posts/"
    Then I wait for 3 seconds