describe("Editar un post", function () {
  it("visits Ghosh", function () {
    cy.visit(
      "http://ec2-13-58-252-44.us-east-2.compute.amazonaws.com:2368/ghost/#/signin/"
    );
    cy.wait(1000);
    loginGhost();
    editarPost();
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
}

function editarPost() {
  const nombrePost =
    "EditarPost" + Math.floor(Math.random() * (100 - (1 - 1))) + 1;
  cy.wait(1000);
  cy.get(".gh-nav-list-new.relative").click();
  cy.get(".gh-content-entry-title").then(($title) => {
    let title = $title.get(getRandomInt(0, $title.length));
    cy.wrap(title).click({ force: true });
  });
  cy.get(".gh-editor-title.ember-text-area.gh-input.ember-view")
    .invoke("val")
    .then((val) => {
      cy.get(".gh-editor-title.ember-text-area.gh-input.ember-view")
        .clear()
        .type(nombrePost);
      cy.get(".koenig-editor__editor.__mobiledoc-editor").type(nombrePost);
      cy.get(".blue.link.fw4.flex.items-center.ember-view").click();
      cy.get(".gh-content-entry-title").contains(nombrePost).should("exist");
    });
  cy.wait(1000);
}
