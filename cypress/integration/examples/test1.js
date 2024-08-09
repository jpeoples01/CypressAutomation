describe("My first test suite", function () {
  it("My first test", function () {
    cy.visit(Cypress.env('url')+"/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);
    cy.get(".product").should("have.length", 5);
    cy.get(".product:visible").should("have.length", 4);
    cy.get(".products").as("productLocator");
    //Parent Child Chaining
    cy.get("@productLocator").find(".product").should("have.length", 4);
    cy.get("@productLocator")
      .find(".product")
      .eq(2)
      .contains("ADD TO CART")
      .click();
    console.log("Test");

    cy.get("@productLocator")
      .find(".product")
      .each(($el, index, $list) => {
        const vegText = $el.find("h4.product-name").text();

        if (vegText.includes("Cashews")) {
          cy.wrap($el).find("button").click();
        }
      });

    cy.get(".brand").should("have.text", "GREENKART");
    cy.get(".brand").then(function (logo) {
      cy.log(logo.text());
    });
  });
});
