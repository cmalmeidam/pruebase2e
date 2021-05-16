import * as transversales from "./function_tx";

describe("Publicar una pagina version 3.3.0", function () {
  it("Publicar una pagina Ghost", function () {
    transversales.visitApp(transversales.URL_VERSION_3_3_0, transversales.PATH_VERSION_3_3_0);
    cy.wait(1000);
    transversales.loginGhost(transversales.PATH_VERSION_3_3_0, transversales.USER_GHOST, transversales.PASS_GHOST);
    cy.wait(1000);
    publishPage(transversales.PATH_VERSION_3_3_0, transversales.URL_VERSION_3_3_0);
    cy.wait(1000);
  });
});

describe("Publicar una pagina version 3.42.5", function () {
  it("Publicar una pagina Ghost", function () {
    transversales.visitApp(transversales.URL_VERSION_3_42_5, transversales.PATH_VERSION_3_42_5);
    cy.wait(1000);
    transversales.loginGhost(transversales.PATH_VERSION_3_42_5, transversales.USER_GHOST, transversales.PASS_GHOST);
    cy.wait(1000);
    publishPage(transversales.PATH_VERSION_3_42_5, transversales.URL_VERSION_3_42_5);
    cy.wait(1000);
  });
});

function publishPage(path, url) {
    const namePage =
    "CreatePage" + Math.floor(Math.random() * (100 - (1 - 1))) + 1;
  cy.wait(1000);
  cy.get('.gh-nav-list.gh-nav-manage').contains('Pages').click();
  cy.wait(1000);
  cy.get('a[href*="page"]').contains('New page').click();
  cy.wait(1000);
  cy.get(".gh-editor-title.ember-text-area.gh-input.ember-view")
    .type(namePage)
    .type("{enter}");  
  cy.wait(1000);
  cy.visit(url+"pages/")
  .then(() => {
    cy.wait(1500);
    cy.screenshot(path + "Paso1");
  });
  cy.get(".gh-content-entry-title").contains(namePage).click({force:true})
  .then(() => {
    cy.wait(1500);
    cy.screenshot(path + "Paso2");
  });
  cy.get(
    ".gh-btn.gh-btn-outline.gh-publishmenu-trigger.ember-basic-dropdown-trigger.ember-view"
  ).click()
  .then(() => {
    cy.wait(1500);
    cy.screenshot(path + "Paso3");
  });
  cy.get(".gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view")
    .contains("Publish")
    .click()
    .then(() => {
      cy.wait(1500);
      cy.screenshot(path + "Paso4");
    });
  cy.get(".gh-notifications").contains("Published").should("exist");
  cy.get(".blue.link.fw4.flex.items-center.ember-view").click()
  .then(() => {
    cy.wait(1500);
    cy.screenshot(path + "Paso5");
  });
}
