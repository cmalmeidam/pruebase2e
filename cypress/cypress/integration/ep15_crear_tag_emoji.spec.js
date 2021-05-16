import * as transversales from "./function_tx";

describe("Crear un tag con emoji version 3.3.0", function () {
  it("Crear un tag con emoji Ghost", function () {
    transversales.visitApp(transversales.URL_VERSION_3_3_0, transversales.PATH_VERSION_3_3_0);
    cy.wait(1000);
    transversales.loginGhost(transversales.PATH_VERSION_3_3_0, transversales.USER_GHOST, transversales.PASS_GHOST);
    cy.wait(1000);
    createTagEmoji(transversales.PATH_VERSION_3_3_0, transversales.URL_VERSION_3_3_0);
    cy.wait(1000);
  });
});

describe("Crear un tag con emoji version 3.42.5", function () {
  it("Crear un tag con emoji Ghost", function () {
    transversales.visitApp(transversales.URL_VERSION_3_42_5, transversales.PATH_VERSION_3_42_5);
    cy.wait(1000);
    transversales.loginGhost(transversales.PATH_VERSION_3_42_5, transversales.USER_GHOST, transversales.PASS_GHOST);
    cy.wait(1000);
    createTagEmoji(transversales.PATH_VERSION_3_42_5, transversales.URL_VERSION_3_42_5);
    cy.wait(1000);
  });
});


function createTagEmoji(path, url) {
  let nameTag =
  "createtag" + Math.floor(Math.random() * (100 - (1 - 1))) + 1;
  let nameTag1=nameTag+"😀😀";
  cy.visit(url+"tags/")
  .then(() => {
    cy.wait(1500);
    cy.screenshot(path + "Paso1");
  });
  cy.get('a[href*="tags"]').contains('New tag').click({force: true})
  .then(() => {
    cy.wait(1500);
    cy.screenshot(path + "Paso2");
  });
  cy.url().should("eq",
    url+"tags/new");
cy.get("input#tag-name.ember-text-field.gh-input.ember-view").type(nameTag1, { force: true });
cy.get("textarea#tag-description.gh-tag-details-textarea.ember-text-area.gh-input.ember-view").type(
  "Descripción tag", { force: true })
  .then(() => {
    cy.wait(1500);
    cy.screenshot(path + "Paso3");
  });
  cy.get("button.gh-btn.gh-btn-blue.gh-btn-icon.ember-view").click({force: true,})
  .then(() => {
    cy.wait(1500);
    cy.screenshot(path + "Paso4");
  });
  cy.url().should('contain',nameTag);
  cy.visit(url+"tags/")
    .then(() => {
      cy.wait(1500);
      cy.screenshot(path + "Paso5");
    });
    cy.get(".gh-tag-list-name").contains(nameTag).should("exist");
  }
