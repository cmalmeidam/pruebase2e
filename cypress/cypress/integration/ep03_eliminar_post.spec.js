describe("Eliminar un post", function () {
  it("visits Ghosh", function () {    
    cy.visit("http://ec2-3-16-149-96.us-east-2.compute.amazonaws.com:2368/ghost/#/signin/"); 
    cy.wait(1000);
    loginGhost();
    eliminarPost();
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

function eliminarPost() { 
  cy.wait(1000);
  cy.get(".gh-nav-list-new.relative").click();
  cy.get(".gh-content-entry-title").then(($title) => {
    let title = $title.get(getRandomInt(0, $title.length));
    cy.wrap(title).click({ force: true });
  });
  cy.get(".gh-editor-title.ember-text-area.gh-input.ember-view")
    .invoke("val")
    .then((val) => {     
      cy.get(".post-settings").click();
      cy.get(
        ".gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button"
      ).click();
      cy.get(".gh-btn.gh-btn-red.gh-btn-icon.ember-view")
        .contains("Delete")
        .click();
      cy.wait(1000); 
      cy.visit("http://ec2-3-16-149-96.us-east-2.compute.amazonaws.com:2368/ghost/#/posts/");
      cy.get(".gh-content-entry-title").contains(val).should('not.exist');
    });
  cy.wait(1000); 
}