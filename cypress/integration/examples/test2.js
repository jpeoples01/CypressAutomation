describe("My second test suite", function () {
  it("My second test", function () {
    cy.visit(Cypress.env('url')+"/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);
    cy.get(".products").as("productLocator");

    cy.get("@productLocator")
      .find(".product")
      .each(($el, index, $list) => {
        const vegText = $el.find("h4.product-name").text();

        if (vegText.includes("Cashews")) {
          cy.wrap($el).find("button").click();
        }
      });
    cy.get(".cart-icon > img").click();
    cy.contains("PROCEED TO CHECKOUT").click();
    cy.contains("Place Order").click();
    cy.get("select").select("Ireland").should("have.value", "Ireland");
    cy.wait(2000);
    cy.get(".chkAgree").check();
    cy.contains("Proceed").click();
  });
});
