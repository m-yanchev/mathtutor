describe('Visits', () => {

  it('main page', () => {
    cy.visit('/')
    cy.get('h1').contains('Підготовка до НМТ з математики')
    cy.get("nav").find('h2').contains('Каталог пробних тестів')
    cy.get("nav").find('a').contains('Каталог окремих завдань')
    cy.get("a").find("h3").contains("НМТ 2023 Демонстраційний варіант")
    cy.get("a").contains("Відкрити тест")
  })

  it("tests page", () => {
    cy.visit('/tests')
    cy.get('h1').contains('Підготовка до НМТ з математики')
    cy.get("nav").find('h2').contains('Каталог пробних тестів')
    cy.get("nav").find('a').contains('Каталог окремих завдань')
    cy.get("a").find("h3").contains("НМТ 2023 Демонстраційний варіант")
    cy.get("a").contains("Відкрити тест")
  })

  it("test page", () => {
    cy.visit('/tests/1')
    cy.get('h1').contains('НМТ 2023 Демонстраційний варіант')
    cy.get("button").contains("Перевірити тест")
    cy.get("nav").find('a').contains('Підготовка до НМТ з математики')
    cy.get("nav").find('a').contains('Каталог пробних тестів')
    cy.get("nav").find('a').contains('НМТ 2023 Демонстраційний варіант')
    cy.get("ul").find("li").contains("1")
    cy.get("ul").find("li").find("h2").contains("Завдання 1")
    cy.get("ul").find("li").find("p").contains("У таблиці наведено дані про температуру повітря в різний час того самого дня.")
    cy.get("ul").find("li").find("table").contains("Час, години")
    cy.get("ul").find("li").find("img")
    cy.get("ul").find("li").find("button").contains("а")
    cy.get("ul").find("li").contains("1.")
    cy.get("ul").find("li").find("input")
  })

  it("examples page", () => {
    cy.visit('/examples')
    cy.get('h1').contains('Підготовка до НМТ з математики')
    cy.get("nav").find('h2').contains('Каталог окремих завдань')
    cy.get("nav").find('a').contains('Каталог пробних тестів')
    cy.get("input")
    cy.contains("Усі завдання")
    cy.get("ul").find("li").find("ul").find("li").contains("НМТ Завдання 1")
    cy.get("ul").find("li").find("p").contains("У таблиці наведено дані про температуру повітря в різний час того самого дня.")
    cy.get("ul").find("li").find("table").contains("Час, години")
    cy.get("ul").find("li").find("img")
    cy.get("ul").find("li").find("button").contains("а")
    cy.get("ul").find("li").contains("1.")
  })

  it("examples page with a tag by filter ", () => {
    cy.visit('/examples/1')
    cy.get('h1').contains('Підготовка до НМТ з математики')
    cy.get('h2').contains('Каталог окремих завдань')
    cy.get('a').contains('Каталог пробних тестів')
    cy.get("ul").find("li").find("ul").find("li").contains("НМТ 2024 Демонстраційний варіант")
    cy.get("ul").find("li").find("p").contains("О шостій годині ранку визначено температуру повітря на десяти метеостанціях. Отримані дані відображено в таблиці.")
    cy.get("ul").find("li").find("table").contains("Температура (у градусах)")
    cy.get("ul").find("li").find("img")
    cy.get("ul").find("li").find("button").contains("а")
    cy.get("ul").find("li").contains("1.")
  })

  it("examples page with a few tags by filter ", () => {
    cy.visit('/examples/1-6')
    cy.get('h1').contains('Підготовка до НМТ з математики')
    cy.get('h2').contains('Каталог окремих завдань')
    cy.get('a').contains('Каталог пробних тестів')
    cy.get("ul").find("li").find("ul").find("li").contains("НМТ 2024 Демонстраційний варіант")
    cy.get("ul").find("li").find("ul").find("li").contains("НМТ Завдання 2")
    cy.get("ul").find("li").find("p").contains("О шостій годині ранку визначено температуру повітря на десяти метеостанціях. Отримані дані відображено в таблиці.")
    cy.get("ul").find("li").find("table").contains("Температура (у градусах)")
    cy.get("ul").find("li").find("button").contains("а")
  })
})

describe("Navigation", () => {

  it("redirect to examples page from main page", () => {
    cy.visit('/')
    cy.get("nav").find('a').click()
    cy.get( "h2", { timeout: 50000 } ).should('contain', "Каталог окремих завдань")
  })

  it("redirect to test page from examples page", () => {
    cy.visit('/examples')
    cy.get("nav").find('a').click()
    cy.get( "h2", { timeout: 50000 } ).should('contain', "Каталог пробних тестів")
    cy.get("a").find("h3").contains("НМТ 2023 Демонстраційний варіант").click()
    cy.get( "h1", { timeout: 50000 } ).should('contain', "НМТ 2023 Демонстраційний варіант")
  })

})