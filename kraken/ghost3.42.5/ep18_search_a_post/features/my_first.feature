Feature: Create page
  @user1 @web
  Scenario: I want to login
    Given I navigate to page "http://ec2-3-15-143-31.us-east-2.compute.amazonaws.com:2368/ghost/#/posts"
    Given I login
    Then I wait for 3 seconds
    Then I click on element having css selector ".gh-nav-btn-search"
    Then I wait for 3 seconds
    Then I search a post
    Then I wait for 3 seconds