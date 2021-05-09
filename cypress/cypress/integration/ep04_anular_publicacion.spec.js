describe("Anular publicación de un post", function () {
  it("visits Ghosh", function () { 
    cy.visit("http://ec2-13-58-252-44.us-east-2.compute.amazonaws.com:2368/ghost/#/signin/"); 
    cy.wait(1000);
    loginGhost();
    anularPubPost();
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

function anularPubPost() {
  cy.wait(1000);
  cy.get(".gh-nav-list-new.relative").click();
  cy.get(".gh-content-status-published.nowrap")
    .then(($title) => {
      let published = $title.length;
      console.log('published:',published);
      let title = $title.get(getRandomInt(0, $title.length));
      cy.wrap(title).click({ force: true });      
      cy.get(
        ".gh-btn.gh-btn-outline.gh-publishmenu-trigger.ember-basic-dropdown-trigger.ember-view"
      ).click();
      cy.get(".gh-publishmenu-radio-label").contains("Unpublished").click();
      cy.get(".gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view")
        .contains("Unpublish")
        .click();
      cy.get(".blue.link.fw4.flex.items-center.ember-view").click();
      if (published === 1) {
        cy.get(".gh-content-status-published.nowrap").should("not.exist");
      } else {
        cy.get(".gh-content-status-published.nowrap")
          .should("have.length", published - 1);
      }
    });
  cy.wait(1000);
}
