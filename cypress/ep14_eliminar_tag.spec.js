describe("Delete tag", () => {
  it("visits Ghost", function () {
    cy.visit(
      "http://ec2-13-58-252-44.us-east-2.compute.amazonaws.com:2368/ghost/#/signin/"
    );
    cy.wait(1000);
    loginGhost();
    deleteTag();
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
  cy.visit('http://ec2-13-58-252-44.us-east-2.compute.amazonaws.com:2368/ghost/#/tags');
}

function deleteTag() {
  cy.get("ol>li.gh-list-row.gh-tags-list-item.ember-view").eq(0).click();
  cy.url().should(
    "eq",
    "http://ec2-13-58-252-44.us-east-2.compute.amazonaws.com:2368/ghost/#/tags/nombre-tag"
  );
  cy.get("button.gh-btn.gh-btn-red.gh-btn-icon.mb15")
    .contains(/^Delete tag$/)
    .click({ force: true });
  cy.get("button.gh-btn.gh-btn-red.gh-btn-icon.mb15")
    .contains(/^"Delete\\"$/)
    .click({ force: true });
  // cy.get('div.no-posts').should('exist')
}
