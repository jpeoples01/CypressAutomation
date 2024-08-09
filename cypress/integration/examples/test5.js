describe("Handling Child Windows", function () {
  it("Should handle child windows", function () {
    cy.visit(Cypress.env('url')+"/AutomationPractice/");

    cy.get("#opentab").invoke("removeAttr", "target").click();

    cy.origin("https://www.qaclickacademy.com", () => {
      cy.get("#navbarSupportedContent a[href*='about']").click();
      cy.wait(2000);
      cy.get(".mt-50 h2").should("contain", "QAClick Academy");
    });
  });
});
