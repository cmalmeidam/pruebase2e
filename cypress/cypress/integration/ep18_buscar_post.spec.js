describe("Buscar post", function () {
    it("visits Ghosh", function () {  
      cy.visit("http://ec2-13-58-252-44.us-east-2.compute.amazonaws.com:2368/ghost/#/signin/"); 
      cy.wait(1000);
      loginGhost();
      buscarPost();
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
  
  function buscarPost() {
    cy.get(".gh-nav-btn-search").click();
    cy.get("[placeholder='Search site...']").first().type("Organising your content");
    cy.wait(1000);
  }