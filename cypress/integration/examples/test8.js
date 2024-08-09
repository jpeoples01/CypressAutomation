import "cypress-iframe";

describe("Handling Frames", function () {
  it("Should handle frames", function () {
    cy.visit(Cypress.env('url')+"/AutomationPractice/");

    cy.frameLoaded("#courses-iframe");
    cy.iframe().find("a[href*='mentorship']").eq(0).click();
    cy.wait(4000);
    cy.iframe().find("h1[class*='pricing-title']").should("have.length", 2);
  });
});
