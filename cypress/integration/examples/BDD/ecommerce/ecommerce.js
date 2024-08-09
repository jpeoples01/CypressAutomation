import { Given, When,Then } from "@badeball/cypress-cucumber-preprocessor";
import homepage from "../../../pageObjects/homepage";
import productPage from "../../../pageObjects/productPage";

const homePage = new homepage();
const product = new productPage();
let name 
let data;

before(function() {
  cy.fixture('example').then(function(fixtureData) {
      data = fixtureData;
  });
});

Given('I open Ecommerce page', () =>{
    cy.visit(Cypress.env('url')+"/angularpractice");
})

When('I add items to the cart', function () {
    homePage.getShopTab().click();
    
    data.productName.forEach(function (element) {
      cy.selectProduct(element);
    });
    product.getCheckout().click();
})

When('Validate the total prices', () => {
  var sum = 0
    product.getPrices().each(($el, index, $list) => {
        cy.log($el.text());
        const amount = $el.text();
        var res = amount.split(" ");
        res = res[1].trim();
        cy.log(res);
        sum = Number(sum) + Number(res);
      })
      .then(function () {
        cy.log(sum);
      });
    product.getSumOfPrices().then(function (element) {
      element.text();

      const amount = element.text();
      var res = amount.split(" ");
      var total = res[1].trim();
      expect(Number(total)).to.equal(sum);
    });
})

Then('Select the country submit and verify', ()=> {
    product.getCheckoutInBasket().click();
    product.getCountry().type("Ireland");
    Cypress.config("defaultCommandTimeout", 7000);
    product.getClickCountry().click();
    product.getTermsAndConditions().click({ force: true });
    product.getPurchase().click();
    product.getAlert().then(function (element) {
      const actualText = element.text();
      expect(actualText.includes("Success!")).to.be.true;
    });
})

When('I fill the form details', function(dataTable) {
  name = dataTable.rawTable[1][0]
  homePage.getEditBox().type(dataTable.rawTable[1][0]);
  homePage.getGender().select(dataTable.rawTable[1][1]);
})

Then('Validate the forms behaviour', ()=> {
  homePage.getTwoWayDataBinding().should("have.value", name);
  homePage.getEditBox().should("have.attr", "minLength", "2");
  homePage.getEnterpreneaur().should("be.disabled");
})

When('Select the shop page', ()=> {
  homePage.getShopTab().click();
})