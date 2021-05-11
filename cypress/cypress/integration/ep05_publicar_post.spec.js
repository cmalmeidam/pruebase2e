describe("Anular publicación de un post", function () {
  it("visits Ghosh", function () {
    cy.visit("http://ec2-13-58-252-44.us-east-2.compute.amazonaws.com:2368/ghost/#/signin/"); 
    cy.wait(1000);
    loginGhost();
    publicarPost();
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

function publicarPost() {
  cy.wait(1000);
  cy.get(".gh-nav-list-new.relative").click();
  cy.get(".gh-content-status-draft.gh-badge.gh-badge-purple.nowrap").then(
    ($title) => {
      let draft = $title.length;
      console.log("draft:", draft);
      let title = $title.get(getRandomInt(0, $title.length));
      cy.wrap(title).click({ force: true });
      cy.get(
        ".gh-btn.gh-btn-outline.gh-publishmenu-trigger.ember-basic-dropdown-trigger.ember-view"
      ).click();
      cy.get(".gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view")
        .contains("Publish")
        .click();
      cy.get(".blue.link.fw4.flex.items-center.ember-view").click();  
    }
  );
  cy.wait(1000);
}
