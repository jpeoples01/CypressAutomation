describe("Handling Mouse Hover Pop-Ups", function () {
  it("Should handle mouse hover pop-ups", function () {
    cy.visit(Cypress.env('url')+"/AutomationPractice/");

    cy.get("div.mouse-hover-content").invoke("show");
    cy.contains("Top").click();
    cy.url().should("include", "top");

    cy.get("#opentab").then(function (el) {
      const url = el.prop("href");
      cy.visit(url);
      cy.origin(url, () => {
        cy.wait(2000);
        cy.get("div.sub-menu-bar a[href*='about']").click();
      });
    });
  });
});
