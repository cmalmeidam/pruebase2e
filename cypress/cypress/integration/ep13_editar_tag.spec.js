describe("Edit a tag", () => {
  it("visits Ghost", function () {
    cy.visit(
      "http://ec2-3-16-149-96.us-east-2.compute.amazonaws.com:2368/ghost/#/signin/"
    );
    cy.wait(1000);
    loginGhost();
    editTag();
    cy.wait(1000);
  });
});
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

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
  cy.visit('http://ec2-3-16-149-96.us-east-2.compute.amazonaws.com:2368/ghost/#/tags');
}

function editTag() {
  const nameTag =
  "EditTag" + Math.floor(Math.random() * (100 - (1 - 1))) + 1;
cy.wait(1000);
cy.get('.gh-nav-list.gh-nav-manage').contains('Tags').click();
cy.get(".gh-tag-list-name").then(($list) => {
  let list = $list.get(getRandomInt(0, $list.length));
  cy.wrap(list).click({ force: true });
});
cy.wait(1000);
cy.get("input#tag-name.ember-text-field.gh-input.ember-view")
  .invoke("val")
  .then((val) => {
    cy.get("input#tag-name.ember-text-field.gh-input.ember-view")
    .clear({ force: true })
    .type(nameTag, { force: true })
    cy.get(".gh-btn.gh-btn-blue.gh-btn-icon.ember-view").click({force: true,});
    cy.wait(1000);
    cy.visit(
      "http://ec2-3-16-149-96.us-east-2.compute.amazonaws.com:2368/ghost/#/tags"
    );
    cy.wait(1000);
    cy.get(".gh-tag-list-name").contains(nameTag).should("exist");
  });
cy.wait(1000);
  
}