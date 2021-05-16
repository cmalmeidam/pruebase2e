import * as transversales from "./function_tx";

describe("Editar una pagina version 3.3.0", function () {
  it("Editar una pagina Ghost", function () {
    transversales.visitApp(transversales.URL_VERSION_3_3_0, transversales.PATH_VERSION_3_3_0);
    cy.wait(1000);
    transversales.loginGhost(transversales.PATH_VERSION_3_3_0, transversales.USER_GHOST, transversales.PASS_GHOST);
    cy.wait(1000);
    editPage(transversales.PATH_VERSION_3_3_0, transversales.URL_VERSION_3_3_0);
    cy.wait(1000);
  });
});

describe("Editar una pagina version 3.42.5", function () {
  it("Editar una pagina Ghost", function () {
    transversales.visitApp(transversales.URL_VERSION_3_42_5, transversales.PATH_VERSION_3_42_5);
    cy.wait(1000);
    transversales.loginGhost(transversales.PATH_VERSION_3_42_5, transversales.USER_GHOST, transversales.PASS_GHOST);
    cy.wait(1000);
    editPage(transversales.PATH_VERSION_3_42_5, transversales.URL_VERSION_3_42_5);
    cy.wait(1000);
  });
});

function editPage(path, url) {
  const createPage1 =
    "CreatePage" + Math.floor(Math.random() * (100 - (1 - 1))) + 1;
  const editPage2 =
    "EditPage" + Math.floor(Math.random() * (100 - (1 - 1))) + 1;
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
    .type(createPage1)
    .type("{enter}")
    .then(() => {
      cy.wait(1500);
      cy.screenshot(path + "Paso3");
    });  
  cy.wait(1000);
  cy.visit(url+"pages/");
  cy.get(".gh-content-entry-title").contains(createPage1).click({force:true})
  .then(() => {
    cy.wait(1500);
    cy.screenshot(path + "Paso4");
  });
  cy.get(".gh-editor-title.ember-text-area.gh-input.ember-view")
    .clear()
    .type(editPage2)
    .type("{enter}")
    .then(() => {
      cy.wait(1500);
      cy.screenshot(path + "Paso5");
    });
  cy.get(".blue.link.fw4.flex.items-center.ember-view").click();
  cy.get(".gh-content-entry-title").contains(editPage2).should("exist")
  .then(() => {
    cy.wait(1500);
    cy.screenshot(path + "Paso6");
  });
  cy.wait(1000);
}
