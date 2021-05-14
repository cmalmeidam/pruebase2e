describe("Create a page", function () {
  it("visits Ghost", function () {
    cy.visit("http://ec2-3-16-149-96.us-east-2.compute.amazonaws.com:2368/ghost/#/signin/");
    cy.wait(1000);
    loginGhost();
    createPage();
    cy.wait(1000);
  });
});

function loginGhost() {
  cy.wait(1000);
  cy.get(".email.ember-text-field.gh-input.ember-view").type(
    "tutoresmisoca@gmail.com"
  );
  cy.get(".password.ember-text-field.gh-input.ember-view").type("FIm$zAHoj%");
  cy.get(
    ".login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view"
  ).click();
  cy.wait(1000);
}

function createPage() {
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
  cy.visit("http://ec2-3-16-149-96.us-east-2.compute.amazonaws.com:2368/ghost/#/pages/");
  cy.get(".gh-content-entry-title").contains(namePage).should('exist');
  cy.wait(1000);
}