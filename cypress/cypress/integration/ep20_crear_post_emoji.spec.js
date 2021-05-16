import * as transversales from "./function_tx";

describe("Crear un post con emoji version 3.3.0", function () {
  it("Crear un post  con emoji Ghost", function () {
    transversales.visitApp(transversales.URL_VERSION_3_3_0, transversales.PATH_VERSION_3_3_0);
    cy.wait(1000);
    transversales.loginGhost(transversales.PATH_VERSION_3_3_0, transversales.USER_GHOST, transversales.PASS_GHOST);
    cy.wait(1000);
    crearPost(transversales.PATH_VERSION_3_3_0, transversales.URL_VERSION_3_3_0);
    cy.wait(1000);
  });
});

describe("Crear un post  con emoji version 3.42.5", function () {
  it("Crear un post  con emoji Ghost", function () {
    transversales.visitApp(transversales.URL_VERSION_3_42_5, transversales.PATH_VERSION_3_42_5);
    cy.wait(1000);
    transversales.loginGhost(transversales.PATH_VERSION_3_42_5, transversales.USER_GHOST, transversales.PASS_GHOST);
    cy.wait(1000);
    crearPost(transversales.PATH_VERSION_3_42_5, transversales.URL_VERSION_3_42_5);
    cy.wait(1000);
  });
});
  
  function crearPost(path, url) {
  let nombrePost =
  "CrearPost" + Math.floor(Math.random() * (100 - (1 - 1))) + 1;
  let nombrePost1=nombrePost+"😀";
  cy.wait(1000);
  cy.get(".gh-secondary-action.gh-nav-new-post.ember-view").click() 
  .then(() => {
    cy.wait(1500);
    cy.screenshot(path + "Paso1");
  });
  cy.get(".gh-editor-title.ember-text-area.gh-input.ember-view")
    .type(nombrePost1)
    .type("{enter}")
    .then(() => {
      cy.wait(1500);
      cy.screenshot(path + "Paso2");
    });
  cy.visit(url)
  .then(() => {
    cy.wait(1500);
    cy.screenshot(path + "Paso3");
  });
  cy.get(".gh-nav-list.gh-nav-manage")
    .contains("Posts")
    .click()
    .then(() => {
      cy.wait(1500);
      cy.screenshot(path + "Paso4");
    });
  cy.get(".gh-content-entry-title").contains(nombrePost1).should("exist");
}