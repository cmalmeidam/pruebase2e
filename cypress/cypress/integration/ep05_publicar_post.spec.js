const URL_VERSION_3_3_0 =
  "http://ec2-3-16-149-96.us-east-2.compute.amazonaws.com:2368/ghost/#/";
const URL_VERSION_3_42_5 =
  "http://ec2-3-15-143-31.us-east-2.compute.amazonaws.com:2368/ghost/#/";
const PATH_VERSION_3_3_0 = "version_3_3_0/";
const PATH_VERSION_3_42_5 = "version_3_42_5/";
const USER_GHOST = "tutoresmisoca@gmail.com";
const PASS_GHOST = "FIm$zAHoj%";

describe("Publicar un post version 3.3.0", function () {
  it("Publicar un post Ghosh", function () {
    visitApp(URL_VERSION_3_3_0, PATH_VERSION_3_3_0);
    cy.wait(1000);
    loginGhost(PATH_VERSION_3_3_0, USER_GHOST, PASS_GHOST);
    cy.wait(1000);
    publicarPost(PATH_VERSION_3_3_0, URL_VERSION_3_3_0);
    cy.wait(1000);
  });
});

describe("Publicar un post version 3.42.5", function () {
  it("Publicar un post Ghosh", function () {
    visitApp(URL_VERSION_3_42_5, PATH_VERSION_3_42_5);
    cy.wait(1000);
    loginGhost(PATH_VERSION_3_42_5, USER_GHOST, PASS_GHOST);
    cy.wait(1000);
    publicarPost(PATH_VERSION_3_42_5, URL_VERSION_3_42_5);
    cy.wait(1000);
  });
});

function visitApp(url, path) {
  cy.visit(url + "signin/").then(() => {
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
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function publicarPost(path, url) {
  cy.wait(1000);
  cy.visit(url+"posts")
    .then(() => {
      cy.wait(1500);
      cy.screenshot(path + "Paso2");
    });
  cy.get(".gh-content-status-draft.gh-badge.gh-badge-purple.nowrap").then(
    ($title) => {
      let draft = $title.length;
      console.log("draft:", draft);
      let title = $title.get(getRandomInt(0, $title.length));
      cy.wrap(title)
        .click({ force: true })
        .then(() => {
          cy.wait(1500);
          cy.screenshot(path + "Paso2");
        });
      cy.get(
        ".gh-btn.gh-btn-outline.gh-publishmenu-trigger.ember-basic-dropdown-trigger.ember-view"
      )
        .click()
        .then(() => {
          cy.wait(1500);
          cy.screenshot(path + "Paso2");
        });
      cy.get(".gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view")
        .contains("Publish")
        .click()
        .then(() => {
          cy.wait(1500);
          cy.screenshot(path + "Paso2");
        });
      cy.get(".blue.link.fw4.flex.items-center.ember-view")
        .click()
        .then(() => {
          cy.wait(1500);
          cy.screenshot(path + "Paso2");
        });
    }
  );
  cy.wait(1000);
}
