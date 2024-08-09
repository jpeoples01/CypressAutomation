describe("Validation of an Api Call", function () {
  it("Validate an Api Call", function () {
    cy.request("POST", "http://216.10.245.166/Library/Addbook.php", {
      name: "The Jeff Marty Book",
      isbn: "art",
      aisle: "229",
      author: "Josh Peoples",
    }).then(function (response) {
        expect(response.body).to.have.property("Msg", "successfully added");
        expect(response.status).to.eql(200);
      });
  })
});
