Feature: End to End Ecommerce Validation

        application Regression

        @Regression
        Scenario: Ecommerce products delivery
        Given I open Ecommerce page
        When I add items to the cart
        And Validate the total prices
        Then Select the country submit and verify

        @Smoke
        Scenario: Filling the form to shop
        Given I open Ecommerce page
        When I fill the form details
        |name|gender|
        |Sam|Female|
        Then Validate the forms behaviour
        And Select the shop page 