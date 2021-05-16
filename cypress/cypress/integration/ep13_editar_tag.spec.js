import * as transversales from "./function_tx";

describe("Editar un tag version 3.3.0", function () {
  it("Editar un tag Ghost", function () {
    transversales.visitApp(transversales.URL_VERSION_3_3_0, transversales.PATH_VERSION_3_3_0);
    cy.wait(1000);
    transversales.loginGhost(transversales.PATH_VERSION_3_3_0, transversales.USER_GHOST, transversales.PASS_GHOST);
    cy.wait(1000);
    editTag(transversales.PATH_VERSION_3_3_0, transversales.URL_VERSION_3_3_0);
    cy.wait(1000);
  });
});

describe("Editar un tag version 3.42.5", function () {
  it("Editar un tag Ghost", function () {
    transversales.visitApp(transversales.URL_VERSION_3_42_5, transversales.PATH_VERSION_3_42_5);
    cy.wait(1000);
    transversales.loginGhost(transversales.PATH_VERSION_3_42_5, transversales.USER_GHOST, transversales.PASS_GHOST);
    cy.wait(1000);
    editTag(transversales.PATH_VERSION_3_42_5, transversales.URL_VERSION_3_42_5);
    cy.wait(1000);
  });
});

function editTag(path, url) {
  const nameTag =
  "EditTag" + Math.floor(Math.random() * (100 - (1 - 1))) + 1;
cy.wait(1000);
cy.get('.gh-nav-list.gh-nav-manage').contains('Tags').click()
.then(() => {
  cy.wait(1500);
  cy.screenshot(path + "Paso1");
});
cy.get(".gh-tag-list-name").then(($list) => {
  let list = $list.get(transversales.getRandomInt(0, $list.length));
  cy.wrap(list).click({ force: true })
  .then(() => {
    cy.wait(1500);
    cy.screenshot(path + "Paso2");
  });
});
cy.get("input#tag-name.ember-text-field.gh-input.ember-view")
  .invoke("val")
  .then((val) => {
    cy.get("input#tag-name.ember-text-field.gh-input.ember-view")
    .clear({ force: true })
    .type(nameTag, { force: true })
    .then(() => {
      cy.wait(1500);
      cy.screenshot(path + "Paso3");
    });
    cy.get(".gh-btn.gh-btn-blue.gh-btn-icon.ember-view").click({force: true})
    .then(() => {
      cy.wait(1500);
      cy.screenshot(path + "Paso4");
    });
    cy.visit(url+"tags/")
    .then(() => {
      cy.wait(1500);
      cy.screenshot(path + "Paso5");
    });
    cy.get(".gh-tag-list-name").contains(nameTag).should("exist");
  });
cy.wait(1000);
  
}