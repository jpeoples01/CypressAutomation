describe("Mock Api Calls", function () {
  it("Mock an Api Call", function () {
    cy.visit(Cypress.env("url") + "/angularAppdemo/");
    cy.intercept(
      "GET",
      "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
      (req) => {
        req.url =
          "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra";
        req.continue((res) => {
          // expect(res.statusCode).to.equal(403)
        });
      }
    ).as("dummyUrl");
    cy.get("button[class='btn btn-primary'").click();
    cy.wait("@dummyUrl");
  });
});
