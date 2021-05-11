describe("Edit a tag", () => {
  it("visits Ghost", function () {
    cy.visit(
      "http://ec2-13-58-252-44.us-east-2.compute.amazonaws.com:2368/ghost/#/signin/"
    );
    cy.wait(1000);
    loginGhost();
    editTag();
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
  cy.visit('http://ec2-13-58-252-44.us-east-2.compute.amazonaws.com:2368/ghost/#/tags');
}

function editTag() {
  cy.get("ol>li.gh-list-row.gh-tags-list-item.ember-view").eq(0).click();
  cy.url().should(
    "eq",
    "http://ec2-13-58-252-44.us-east-2.compute.amazonaws.com:2368/ghost/#/tags/nombre-tag"
  );
  cy.get("input#tag-name.ember-text-field.gh-input.ember-view")
    .clear({ force: true })
    .type("Nombre tag cambio", { force: true });
  cy.get(
    "textarea#tag-description.gh-tag-details-textarea.ember-text-area.gh-input.ember-view"
  )
    .clear({ force: true })
    .type("Descripción tag cambio", { force: true });
  cy.get("button.gh-btn.gh-btn-blue.gh-btn-icon.ember-view").click({
    force: true,
  });
  cy.visit(
    "http://ec2-13-58-252-44.us-east-2.compute.amazonaws.com:2368/ghost/#/tags"
  );
  cy.get("ol>li.gh-list-row.gh-tags-list-item.ember-view").eq(0).click();
  cy.get("input#tag-name.ember-text-field.gh-input.ember-view").should(
    "have.value",
    "Nombre tag cambio"
  );
  cy.get(
    "textarea#tag-description.gh-tag-details-textarea.ember-text-area.gh-input.ember-view"
  ).should("have.value", "Descripción tag cambio");
}
