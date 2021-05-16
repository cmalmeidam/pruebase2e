import * as transversales from "./function_tx";

describe("Anular la publicación de una pagina version 3.3.0", function () {
  it("Anular la publicación de una pagina Ghost", function () {
    transversales.visitApp(transversales.URL_VERSION_3_3_0, transversales.PATH_VERSION_3_3_0);
    cy.wait(1000);
    transversales.loginGhost(transversales.PATH_VERSION_3_3_0, transversales.USER_GHOST, transversales.PASS_GHOST);
    cy.wait(1000);
    unpubPage(transversales.PATH_VERSION_3_3_0, transversales.URL_VERSION_3_3_0);
    cy.wait(1000);
  });
});

describe("Anular la publicación de una pagina version 3.42.5", function () {
  it("Anular la publicación de una pagina Ghost", function () {
    transversales.visitApp(transversales.URL_VERSION_3_42_5, transversales.PATH_VERSION_3_42_5);
    cy.wait(1000);
    transversales.loginGhost(transversales.PATH_VERSION_3_42_5, transversales.USER_GHOST, transversales.PASS_GHOST);
    cy.wait(1000);
    unpubPage(transversales.PATH_VERSION_3_42_5, transversales.URL_VERSION_3_42_5);
    cy.wait(1000);
  });
});
function unpubPage(path, url) {
  cy.wait(1000);
  cy.get('.gh-nav-list.gh-nav-manage').contains('Pages').click()
  .then(() => {
    cy.wait(1500);
    cy.screenshot(path + "Paso1");
  });
  cy.get(".gh-content-status-published.nowrap")
    .then(($title) => {
      let published = $title.length;
      console.log('published:',published);
      let title = $title.get(transversales.getRandomInt(0, $title.length));
      cy.wrap(title).click({ force: true })
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
      cy.get(".gh-publishmenu-radio-label").contains("Unpublished").click()
      .then(() => {
        cy.wait(1500);
        cy.screenshot(path + "Paso4");
      });
      cy.get(".gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view")
        .contains("Unpublish")
        .click()
        .then(() => {
          cy.wait(1500);
          cy.screenshot(path + "Paso5");
        });
      cy.get(".blue.link.fw4.flex.items-center.ember-view").click();
      if (published === 1) {
        cy.get(".gh-content-status-published.nowrap").should("not.exist");
      } else {
        cy.get(".gh-content-status-published.nowrap")
          .should("have.length", published - 1);
      }
    });
  cy.wait(1000);
}
