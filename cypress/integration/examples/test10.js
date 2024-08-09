import homepage from "../pageObjects/homepage";
import productPage from "../pageObjects/productPage";
describe("Handling Different It Blocks", function () {
  before(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });
  it("It Block 1", function () {
    const homePage = new homepage();
    const product = new productPage();
    cy.visit(Cypress.env('url')+"/angularpractice");
    homePage.getEditBox().type(this.data.name);
    homePage.getGender().select(this.data.gender);
    cy.wait(2000);
    homePage.getTwoWayDataBinding().should("have.value", this.data.name);
    homePage.getEditBox().should("have.attr", "minLength", "2");
    homePage.getEnterpreneaur().should("be.disabled");

    // cy.pause()
    homePage.getShopTab().click();
    cy.wait(2000);
    this.data.productName.forEach(function (element) {
      cy.selectProduct(element);
    });
    product.getCheckout().click();
    var sum = 0;
    product
      .getPrices()
      .each(($el, index, $list) => {
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
  });
});
