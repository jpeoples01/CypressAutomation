describe("Mock Api Calls", function () {
  it("Mock an Api Call", function () {
    cy.visit(Cypress.env("url") + "/angularAppdemo/");
    cy.intercept(
      {
        method: "GET",
        url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
      },
      {
        statusCode: 200,
        body: [
          {
            book_name: "RestAssured with Java",
            isbn: "RSU",
            aisle: "2301",
          },
        ],
      }
    ).as("bookretrievals");

    cy.get("button[class='btn btn-primary'").click();
    cy.wait("@bookretrievals").then(({ request, response }) => {
      cy.get('tr').should('have.length', response.body.length+1)
    });
    cy.get("p").should("have.text", "Oops only 1 Book available");

    //length of response array should equal number of rows in the table
  });
});
