Feature: Editar Post
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