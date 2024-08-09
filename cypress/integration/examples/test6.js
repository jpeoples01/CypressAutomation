describe("Handling Web Tables", function () {
  it("Should handle web tables", function () {
    cy.visit(Cypress.env('url')+"/AutomationPractice/");

    cy.get("tr td:nth-child(2)").each(($el, index, $list) => {
      const course = $el.text();

      if (course.includes("Python")) {
        cy.get("tr td:nth-child(2)")
          .eq(index)
          .next()
          .then(function (price) {
            const priceText = price.text();
            expect(priceText).to.equal("25");
          });
      }
    });
  });
});
