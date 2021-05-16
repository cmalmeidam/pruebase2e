import * as transversales from "./function_tx";

describe("Buscar Usuario version 3.3.0", function () {
  it("Buscar Usuario Ghost", function () {
    transversales.visitApp(transversales.URL_VERSION_3_3_0, transversales.PATH_VERSION_3_3_0);
    cy.wait(1000);
    transversales.loginGhost(transversales.PATH_VERSION_3_3_0, transversales.USER_GHOST, transversales.PASS_GHOST);
    cy.wait(1000);
    buscarUsuario(transversales.PATH_VERSION_3_3_0, transversales.URL_VERSION_3_3_0);
    cy.wait(1000);
  });
});

describe("Buscar Usuario version 3.42.5", function () {
  it("Buscar Usuario Ghost", function () {
    cy.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
  });
    transversales.visitApp(transversales.URL_VERSION_3_42_5, transversales.PATH_VERSION_3_42_5);
    cy.wait(1000);
    transversales.loginGhost(transversales.PATH_VERSION_3_42_5, transversales.USER_GHOST, transversales.PASS_GHOST);
    cy.wait(1000);
    buscarUsuario(transversales.PATH_VERSION_3_42_5, transversales.URL_VERSION_3_42_5);
    cy.wait(1000);
  });
});
  
  function buscarUsuario(path, url) {
    cy.get(".gh-nav-btn-search").click({force: true})
    .then(() => {
      cy.wait(1500);
      cy.screenshot(path + "Paso1");
    });
    cy.get("[placeholder='Search site...']").first().type("Pruebas_Ghost")
    .then(() => {
      cy.wait(1500);
      cy.screenshot(path + "Paso2");
    });
    cy.wait(1000);
  }