import * as transversales from "./function_tx";

describe("Crear una pagina version 3.3.0", function () {
  it("Crear una pagina Ghost", function () {
    transversales.visitApp(transversales.URL_VERSION_3_3_0, transversales.PATH_VERSION_3_3_0);
    cy.wait(1000);
    transversales.loginGhost(transversales.PATH_VERSION_3_3_0, transversales.USER_GHOST, transversales.PASS_GHOST);
    cy.wait(1000);
    createPage(transversales.PATH_VERSION_3_3_0, transversales.URL_VERSION_3_3_0);
    cy.wait(1000);
  });
});

describe("Crear una pagina version 3.42.5", function () {
  it("Crear una pagina Ghost", function () {
    transversales.visitApp(transversales.URL_VERSION_3_42_5, transversales.PATH_VERSION_3_42_5);
    cy.wait(1000);
    transversales.loginGhost(transversales.PATH_VERSION_3_42_5, transversales.USER_GHOST, transversales.PASS_GHOST);
    cy.wait(1000);
    createPage(transversales.PATH_VERSION_3_42_5, transversales.URL_VERSION_3_42_5);
    cy.wait(1000);
  });
});

function createPage(path, url) {
  const namePage =
    "CreatePage" + Math.floor(Math.random() * (100 - (1 - 1))) + 1;
  cy.wait(1000);
  cy.get('.gh-nav-list.gh-nav-manage').contains('Pages').click()
  .then(() => {
    cy.wait(1500);
    cy.screenshot(path + "Paso1");
  });
  cy.get('a[href*="page"]').contains('New page').click()
  .then(() => {
    cy.wait(1500);
    cy.screenshot(path + "Paso2");
  });
  cy.get(".gh-editor-title.ember-text-area.gh-input.ember-view")
    .type(namePage)
    .type("{enter}").then(() => {
      cy.wait(1500);
      cy.screenshot(path + "Paso3");
    });
  cy.visit(url+"pages/");
  cy.get(".gh-content-entry-title").contains(namePage).should('exist')  
  .then(() => {
    cy.wait(1500);
    cy.screenshot(path + "Paso4");  
  });
  cy.wait(1000);
}