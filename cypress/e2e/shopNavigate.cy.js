describe("Shop navigate:", () => {
  before(() => {
    cy.visit("https://hm-design-hernandemonteiro.vercel.app");
    cy.intercept("GET", "/products").as("getProducts");
    cy.wait("@getProducts").then((xhr) => {
      xhr.response && expect(xhr.response.statusCode).be.eq(200);
    });
  });

  it("Menu", () => {
    cy.wait(2000);
    cy.get(".btn").eq(1).click();
    cy.wait(4000).then(() => cy.get(".btn").eq(2).click());
  });

  it("Search", () => {
    cy.get("input").first().type("produto");
    cy.get("button").first().click();
  });

  it("Home with logo", () => {
    cy.get(".HeaderLogo").click();
  });

  it("Product Detail", () => {
    cy.contains("Detalhes").click();
  });

  it("Scroll top", () => {
    cy.scrollTo(0, 300);
    cy.get(".scroll").click();
  });

  it("login", () => {
    cy.get(".loginLink").click();
  });

  it("login > register > login", () => {
    cy.contains("cadastrar-se").click();
    cy.contains("Já tem conta?").click();
  });

  it("login > forgot password > login", () => {
    cy.get(".forgotPassword").click();
    cy.contains("VOLTAR").click();
  });

  it("login > Home", () => {
    cy.contains("Voltar ao site").click();
  });
});
