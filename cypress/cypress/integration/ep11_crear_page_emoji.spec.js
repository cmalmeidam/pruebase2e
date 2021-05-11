describe('Create a page with emojis', () => {

    it("visits Ghost", function () {
        cy.visit("http://ec2-13-58-252-44.us-east-2.compute.amazonaws.com:2368/ghost/#/signin/");
        cy.wait(1000);
        loginGhost();
        createPageEmoji();
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
  }

  function createPageEmoji() {
    const namePage =
      "CreatePageEmoji 😀😀" + Math.floor(Math.random() * (100 - (1 - 1))) + 1;
    cy.wait(1000);
    cy.get('.gh-nav-list.gh-nav-manage').contains('Pages').click();
    cy.get(".gh-btn.gh-btn-green.ember-view").contains('New page').click();
    cy.get(".gh-editor-title.ember-text-area.gh-input.ember-view")
      .type(namePage)
      .type("{enter}");
    cy.get(".blue.link.fw4.flex.items-center.ember-view").click();
    cy.get(".gh-content-entry-title").contains(namePage).should('exist');
    cy.wait(1000);
  }