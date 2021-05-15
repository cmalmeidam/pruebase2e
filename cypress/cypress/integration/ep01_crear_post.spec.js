const URL_VERSION_3_3_0 =
  "http://ec2-3-16-149-96.us-east-2.compute.amazonaws.com:2368/ghost/#/";
const URL_VERSION_3_42_5 =
  "http://ec2-3-15-143-31.us-east-2.compute.amazonaws.com:2368/ghost/#/";
const PATH_VERSION_3_3_0 = "version_3_3_0/";
const PATH_VERSION_3_42_5 = "version_3_42_5/";
const USER_GHOST = "tutoresmisoca@gmail.com";
const PASS_GHOST = "FIm$zAHoj%";

describe("Crear un post version 3.3.0", function () {
  it("Crear un post Ghosh", function () {
    visitApp(URL_VERSION_3_3_0, PATH_VERSION_3_3_0);
    cy.wait(1000);
    loginGhost(PATH_VERSION_3_3_0, USER_GHOST, PASS_GHOST);
    cy.wait(1000);
    crearPost(PATH_VERSION_3_3_0, URL_VERSION_3_3_0);
    cy.wait(1000);
  });
});

describe("Crear un post version 3.42.5", function () {
  it("Crear un post Ghosh", function () {
    visitApp(URL_VERSION_3_42_5, PATH_VERSION_3_42_5);
    cy.wait(1000);
    loginGhost(PATH_VERSION_3_42_5, USER_GHOST, PASS_GHOST);
    cy.wait(1000);
    crearPost(PATH_VERSION_3_42_5, URL_VERSION_3_42_5);
    cy.wait(1000);
  });
});

function visitApp(url, path) {
  cy.visit(url+'signin/').then(() => {
    cy.wait(1500);
    cy.screenshot(path + "Paso1");
  });
}

function loginGhost(path, user, pass) {
  cy.wait(1000);
  cy.get(".email.ember-text-field.gh-input.ember-view").type(user);
  cy.get(".password.ember-text-field.gh-input.ember-view")
    .type(pass)
    .then(() => {
      cy.wait(1500);
      cy.screenshot(path + "Paso2");
    });
  cy.get(".login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view")
    .click()
    .then(() => {
      cy.wait(6000);
      cy.screenshot(path + "Paso3");
    });
}

function crearPost(path, url) {
  const nombrePost =
    "CrearPost" + Math.floor(Math.random() * (100 - (1 - 1))) + 1;
  cy.wait(1000);
  cy.get(".gh-secondary-action.gh-nav-new-post.ember-view").click() .then(() => {
    cy.wait(1500);
    cy.screenshot(path + "Paso4");
  });;
  cy.get(".gh-editor-title.ember-text-area.gh-input.ember-view")
    .type(nombrePost)
    .type("{enter}")
    .then(() => {
      cy.wait(1500);
      cy.screenshot(path + "Paso5");
    });
  cy.wait(1000);
  cy.visit(url);
  cy.wait(1000);
  cy.get(".gh-nav-list.gh-nav-manage")
    .contains("Posts")
    .click()
    .then(() => {
      cy.wait(1500);
      cy.screenshot(path + "Paso6");
    });
  cy.wait(1000);
  cy.get(".gh-content-entry-title").contains(nombrePost).should("exist");
}