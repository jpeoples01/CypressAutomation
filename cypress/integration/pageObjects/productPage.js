class productPage {
getCheckout() {
    return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
}
getCheckoutInBasket(){
    return cy.get(':nth-child(4) > :nth-child(5) > .btn')
}
getCountry(){
    return cy.get('#country')
}
getClickCountry() {
    return cy.get('.suggestions > ul > li > a')
}
getTermsAndConditions() {
    return cy.get('#checkbox2')
}
getPurchase() {
    return cy.get('input[type="submit"]')
}
getAlert() {
    return cy.get('.alert')
}
getPrices() {
    return cy.get('tr td:nth-child(4) strong')
}
getSumOfPrices() {
    return cy.get('h3 strong')
}
}

export default productPage