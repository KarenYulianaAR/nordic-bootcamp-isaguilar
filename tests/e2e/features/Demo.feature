@desktop
Feature: Interact with the Demo page
  As a user on the Demo page
  I want to be able to navigate it and perform actions

  @OnlyChrome
  Scenario: Show the Demo page content
    Given I am on the Demo page
    Then The page should have 'Demo Page' as title

  Scenario: View the Demo page as a logged-in user
    Given I am logged in with the session name 'ghy-user-mla'
    And I am on the Demo page
    Then The page should have 'Welcome TETE1143000!' as user welcome legend

  Scenario: View the Demo page as a guest
    Given I am a guest user
    And I am on the Demo page
    Then The page should have 'Welcome you!' as user welcome legend

  @mobile
  Scenario: Change counter value
    Given I am on the Demo page
    When I click on <counter_action> counter
    Then The counter value is <value_after_action>

    Examples:
    | counter_action | value_after_action   |
    | increment      | 'Clicks counter: 1'  |
    | decrement      | 'Clicks counter: -1' |