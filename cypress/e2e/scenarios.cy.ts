describe("Scenarios", () => {

  it("solve the test", () => {
    cy.visit('/tests')
    cy.get( "a", { timeout: 100000 } ).find("h3").contains("НМТ 2023 Демонстраційний варіант").click()
    cy.get( "button", { timeout: 100000 } ).contains("Перевірити тест").click()
    cy.get( "div", { timeout: 100000 } ).should( 'contain', "Ваш результат:" )
  })

})