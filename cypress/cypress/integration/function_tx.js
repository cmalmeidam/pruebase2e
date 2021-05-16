export const URL_VERSION_3_3_0 =
  "http://ec2-3-16-149-96.us-east-2.compute.amazonaws.com:2368/ghost/#/";
export const URL_VERSION_3_42_5 =
  "http://ec2-3-15-143-31.us-east-2.compute.amazonaws.com:2368/ghost/#/";
export const PATH_VERSION_3_3_0 = "version_3_3_0/";
export const PATH_VERSION_3_42_5 = "version_3_42_5/";
export const USER_GHOST = "tutoresmisoca@gmail.com";
export const PASS_GHOST = "FIm$zAHoj%";

export function visitApp(url, path) {
  cy.visit(url + "signin/");
}

export function loginGhost(path, user, pass) {
  cy.wait(1000);
  cy.get(".email.ember-text-field.gh-input.ember-view").type(user);
  cy.get(".password.ember-text-field.gh-input.ember-view")
    .type(pass);
  cy.get(".login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view")
    .click();
}

export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}