import * as transversales from "./function_tx";

describe("Crear staff correo vacio version 3.3.0", function () {
  it("Crear staff correo vacio Ghost", function () {
    transversales.visitApp(transversales.URL_VERSION_3_3_0, transversales.PATH_VERSION_3_3_0);
    cy.wait(1000);
    transversales.loginGhost(transversales.PATH_VERSION_3_3_0, transversales.USER_GHOST, transversales.PASS_GHOST);
    cy.wait(1000);
    dejarVacioCorreoInviteStaff(transversales.PATH_VERSION_3_3_0, transversales.URL_VERSION_3_3_0);
    cy.wait(1000);
  });
});

describe("Crear staff correo vacio version 3.42.5", function () {
  it("Crear staff correo vacio Ghost", function () {
    transversales.visitApp(transversales.URL_VERSION_3_42_5, transversales.PATH_VERSION_3_42_5);
    cy.wait(1000);
    transversales.loginGhost(transversales.PATH_VERSION_3_42_5, transversales.USER_GHOST, transversales.PASS_GHOST);
    cy.wait(1000);
    dejarVacioCorreoInviteStaff(transversales.PATH_VERSION_3_42_5, transversales.URL_VERSION_3_42_5);
    cy.wait(1000);
  });
});

  function dejarVacioCorreoInviteStaff(path, url) {
    cy.get('.gh-nav-list.gh-nav-manage').contains('Staff').click()
    .then(() => {
      cy.wait(1500);
      cy.screenshot(path + "Paso1");
    });
    cy.get(".gh-btn.gh-btn-green").contains('Invite people').click()
    .then(() => {
      cy.wait(1500);
      cy.screenshot(path + "Paso2");
    });
    cy.get(".gh-btn.gh-btn-green.gh-btn-icon").contains("Send invitation now").click()
    .then(() => {
      cy.wait(1500);
      cy.screenshot(path + "Paso3");
    })
  }