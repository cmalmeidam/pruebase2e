describe("Editar un post", function () {
  it("visits Ghosh", function () {
    cy.visit(
      "http://ec2-3-16-149-96.us-east-2.compute.amazonaws.com:2368/ghost/#/signin/"
    );
    cy.wait(1000);
    loginGhost();
    editarPost();
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
}

function editarPost() {
  const nombrePost =
  "CrearPost" + Math.floor(Math.random() * (100 - (1 - 1))) + 1;
  const editarPost =
  "EditarPost" + Math.floor(Math.random() * (100 - (1 - 1))) + 1;
cy.wait(1000);
cy.get(".gh-secondary-action.gh-nav-new-post.ember-view").click();
cy.get(".gh-editor-title.ember-text-area.gh-input.ember-view")
  .type(nombrePost)
  .type("{enter}"); 
  cy.wait(1000); 
  cy.visit("http://ec2-3-16-149-96.us-east-2.compute.amazonaws.com:2368/ghost/");
  cy.wait(1000);
  cy.get('.gh-nav-list.gh-nav-manage').contains('Posts').click();
  cy.wait(1000);
  cy.get(".gh-content-entry-title").contains(nombrePost).click({force:true});
cy.wait(1000);
  cy.get(".gh-editor-title.ember-text-area.gh-input.ember-view")
    .invoke("val")
    .then((val) => {
      cy.get(".gh-editor-title.ember-text-area.gh-input.ember-view")
        .type(editarPost)
        .type("{enter}");
  cy.wait(1000);
  cy.visit("http://ec2-3-16-149-96.us-east-2.compute.amazonaws.com:2368/ghost/");
  cy.wait(1000);
  cy.get('.gh-nav-list.gh-nav-manage').contains('Posts').click();
  cy.wait(1000);
  cy.get(".gh-content-entry-title").contains(editarPost).should("exist");
    });
  cy.wait(1000);
}
