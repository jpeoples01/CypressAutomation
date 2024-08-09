describe("My fourth test suite", function () {
  it("My fourth test", function () {
    cy.visit(Cypress.env('url')+"/AutomationPractice/");

    //check boxes
    cy.get("#alertbtn").click();
    cy.get('[value="Confirm"]');

    //window:alerts
    cy.on("window:alert", (str) => {
      //Mocha
      expect(str).to.equal(
        "Hello , share this practice page and share your knowledge"
      );
    });

    cy.on("window:confirm", (str) => {
      //Mocha
      expect(str).to.equal("Hello , are you sure you want to confirm?");
    });
  });
});
