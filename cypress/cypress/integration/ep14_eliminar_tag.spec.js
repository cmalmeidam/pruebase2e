import * as transversales from "./function_tx";

describe("Eliminar un tag version 3.3.0", function () {
  it("Eliminar un tag Ghost", function () {
    transversales.visitApp(transversales.URL_VERSION_3_3_0, transversales.PATH_VERSION_3_3_0);
    cy.wait(1000);
    transversales.loginGhost(transversales.PATH_VERSION_3_3_0, transversales.USER_GHOST, transversales.PASS_GHOST);
    cy.wait(1000);
    deleteTag(transversales.PATH_VERSION_3_3_0, transversales.URL_VERSION_3_3_0);
    cy.wait(1000);
  });
});

describe("Eliminar un tag version 3.42.5", function () {
  it("Eliminar un tag Ghost", function () {
    transversales.visitApp(transversales.URL_VERSION_3_42_5, transversales.PATH_VERSION_3_42_5);
    cy.wait(1000);
    transversales.loginGhost(transversales.PATH_VERSION_3_42_5, transversales.USER_GHOST, transversales.PASS_GHOST);
    cy.wait(1000);
    deleteTag(transversales.PATH_VERSION_3_42_5, transversales.URL_VERSION_3_42_5);
    cy.wait(1000);
  });
});


function deleteTag(path, url) {
  const nameTag =
    "deletetag" + Math.floor(Math.random() * (100 - (1 - 1))) + 1;
  cy.get('a[href*="tags"]').contains('Tags').click({force: true});
  cy.wait(1000);
  cy.get('a[href*="tags"]').contains('New tag').click({force: true});
  cy.get("input#tag-name.ember-text-field.gh-input.ember-view").type(nameTag, { force: true });
  cy.get("button.gh-btn.gh-btn-blue.gh-btn-icon.ember-view").click({force: true,});
  cy.wait(1000);
  cy.url().should('contain',nameTag);
  cy.visit(url+"tags/")
  .then(() => {
    cy.wait(1500);
    cy.screenshot(path + "Paso1");
  });
  cy.get(".gh-tag-list-name").contains(nameTag).click({force: true})
  .then(() => {
    cy.wait(1500);
    cy.screenshot(path + "Paso2");
  });
  cy.get('.gh-btn.gh-btn-red.gh-btn-icon').click({force: true,})
  .then(() => {
    cy.wait(1500);
    cy.screenshot(path + "Paso3");
  });
  cy.get("button.gh-btn.gh-btn-red.gh-btn-icon.mb15").click({ force: true });
  cy.get("button.gh-btn.gh-btn-red.gh-btn-icon.ember-view")
    .contains('Delete').click({force: true});
    cy.get("button.gh-btn.gh-btn-red.gh-btn-icon.mb15").click({ force: true });
    cy.get("button.gh-btn.gh-btn-red.gh-btn-icon.ember-view")
      .contains('Delete').click({force: true})
      .then(() => {
        cy.wait(1500);
        cy.screenshot(path + "Paso4");
      });
  cy.wait(2000);
  cy.visit(url+"tags/");
  cy.get(".gh-tag-list-name").contains(nameTag).should("not.exist")
}
