describe("Create a tag", () => {
  it("visits Ghost", function () {
    cy.visit(
      "http://ec2-13-58-252-44.us-east-2.compute.amazonaws.com:2368/ghost/#/signin/"
    );
    cy.wait(1000);
    loginGhost();
    createTag();
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

function createTag() {
  cy.get("a.ember-view.gh-btn.gh-btn-green.gh-btn-lg").click();
  cy.url().should("eq",
    "http://ec2-13-58-252-44.us-east-2.compute.amazonaws.com:2368/ghost/#/tags/new");
  cy.get("button.gh-btn.gh-btn-blue.gh-btn-icon.ember-view").click({force: true,});
  cy.contains("p.response", "You must specify a name for the tag.");
  cy.get("input#tag-name.ember-text-field.gh-input.ember-view").type("Nombre tag", { force: true });
  cy.get("input#meta-title.ember-text-field.gh-input.ember-view").type("meta-nombre", { force: true });
  cy.get("textarea#tag-description.gh-tag-details-textarea.ember-text-area.gh-input.ember-view").type(
      "Descripción tag", { force: true });
  cy.get("textarea#meta-description.gh-tag-details-textarea.ember-text-area.gh-input.ember-view").type(
      "Descripción metadato", { force: true });
  cy.get("button.gh-btn.gh-btn-blue.gh-btn-icon.gh-btn-red.ember-view").click({force: true,});
  cy.url().should("eq",
    "http://ec2-13-58-252-44.us-east-2.compute.amazonaws.com:2368/__/#/tags/nombre-tag"
  );
}
