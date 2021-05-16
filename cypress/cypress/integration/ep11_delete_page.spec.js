import * as transversales from "./function_tx";

describe("Eliminar una pagina version 3.3.0", function () {
  it("Eliminar una pagina  Ghost", function () {
    transversales.visitApp(transversales.URL_VERSION_3_3_0, transversales.PATH_VERSION_3_3_0);
    cy.wait(1000);
    transversales.loginGhost(transversales.PATH_VERSION_3_3_0, transversales.USER_GHOST, transversales.PASS_GHOST);
    cy.wait(1000);
    deletePage(transversales.PATH_VERSION_3_3_0, transversales.URL_VERSION_3_3_0);
    cy.wait(1000);
  });
});

describe("Eliminar una pagina  version 3.42.5", function () {
  it("Eliminar una pagina  Ghost", function () {
    transversales.visitApp(transversales.URL_VERSION_3_42_5, transversales.PATH_VERSION_3_42_5);
    cy.wait(1000);
    transversales.loginGhost(transversales.PATH_VERSION_3_42_5, transversales.USER_GHOST, transversales.PASS_GHOST);
    cy.wait(1000);
    deletePage(transversales.PATH_VERSION_3_42_5, transversales.URL_VERSION_3_42_5);
    cy.wait(1000);
  });
});

function deletePage(path, url) {
  cy.wait(1000);
  cy.get('.gh-nav-list.gh-nav-manage').contains('Pages').click({force:true})
  .then(() => {
    cy.wait(1500);
    cy.screenshot(path + "Paso1");
  });
  cy.get(".gh-content-entry-title").then(($title) => {
    let title = $title.get(transversales.getRandomInt(0, $title.length));
    cy.wrap(title).click({ force: true })
    .then(() => {
      cy.wait(1500);
      cy.screenshot(path + "Paso2");
    });
  });
  cy.get(".gh-editor-title.ember-text-area.gh-input.ember-view")
    .invoke("val")
    .then((val) => {     
      cy.get(".post-settings").click()
      .then(() => {
        cy.wait(1500);
        cy.screenshot(path + "Paso3");
      });
      cy.get(
        ".gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button"
      ).click()
      .then(() => {
        cy.wait(1500);
        cy.screenshot(path + "Paso4");
      });
      cy.get(".gh-btn.gh-btn-red.gh-btn-icon.ember-view")
        .contains("Delete")
        .click();
        cy.wait(1000); 
        cy.visit(url+"pages/")
        .then(() => {
          cy.wait(1500);
          cy.screenshot(path + "Paso5");
        });
      cy.get(".gh-content-entry-title").contains(val).should('not.exist');
    });
  cy.wait(1000); 
}