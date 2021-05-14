describe("Delete tag", () => {
  it("visits Ghost", function () {
    cy.visit(
      "http://ec2-3-16-149-96.us-east-2.compute.amazonaws.com:2368/ghost/#/signin/"
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
}

function deleteTag() {
  const nameTag =
    "deletetag" + Math.floor(Math.random() * (100 - (1 - 1))) + 1;
  cy.get('a[href*="tags"]').contains('Tags').click({force: true});
  cy.wait(1000);
  cy.get('a[href*="tags"]').contains('New tag').click({force: true});
  cy.get("input#tag-name.ember-text-field.gh-input.ember-view").type(nameTag, { force: true });
  cy.get("button.gh-btn.gh-btn-blue.gh-btn-icon.ember-view").click({force: true,});
  cy.wait(1000);
  cy.url().should('contain',nameTag);
  cy.visit('http://ec2-3-16-149-96.us-east-2.compute.amazonaws.com:2368/ghost/#/tags');
  cy.get(".gh-tag-list-name").contains(nameTag).click({force: true});
  cy.get('.gh-btn.gh-btn-red.gh-btn-icon').click({force: true,});
  cy.get("button.gh-btn.gh-btn-red.gh-btn-icon.mb15").click({ force: true });
  cy.get("button.gh-btn.gh-btn-red.gh-btn-icon.ember-view")
    .contains('Delete').click({force: true});
    cy.get("button.gh-btn.gh-btn-red.gh-btn-icon.mb15").click({ force: true });
    cy.get("button.gh-btn.gh-btn-red.gh-btn-icon.ember-view")
      .contains('Delete').click({force: true});
  cy.wait(2000);
  cy.visit('http://ec2-3-16-149-96.us-east-2.compute.amazonaws.com:2368/ghost/#/tags');
  cy.get(".gh-tag-list-name").contains(nameTag).should("not.exist")
}
