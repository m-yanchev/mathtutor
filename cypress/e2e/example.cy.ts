describe('Visits', () => {

    it("example page", () => {
        cy.visit('/example/62')
        cy.get('h1').contains('Перегляд завдання')
        cy.get("ul").find("li").contains("НМТ Завдання 8")
        cy.get("p").contains("Якщо")
        cy.get("ol").find("li").contains("а.")
        cy.get("h2").contains("Рішення")
        cy.get("button").contains("а")  
    })

})

describe("Navigation", () => {

    it("redirect to example page from examples page", () => {
        cy.visit('/examples')
        cy.get("a").contains('Рішення').first().click()
        cy.url().should('include', "/example")
    })

    it("redirect to examples page from example page", () => {
        cy.visit('/example/62')
        cy.get("nav").find('a').contains('Каталог окремих завдань').click()
        cy.url().should('include', "/examples")
        cy.get( "h2", { timeout: 50000 } ).should('contain', "Каталог окремих завдань")
    })

    it("redirect to tests page from example page", () => {
        cy.visit('/example/62')
        cy.get("nav").find('a').contains('Підготовка до НМТ з математики').click()
        cy.url().should('include', "/")
        cy.get( "h2", { timeout: 50000 } ).should('contain', "Каталог пробних тестів")
    })

})