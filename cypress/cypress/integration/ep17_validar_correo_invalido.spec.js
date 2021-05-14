describe("Validar correo invalido", function () {
    it("visits Ghosh", function () {  
      cy.visit("http://ec2-3-16-149-96.us-east-2.compute.amazonaws.com:2368/ghost/#/signin/"); 
      cy.wait(1000);
      loginGhost();
      dejarVacioCorreoInviteStaff();
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
  
  function dejarVacioCorreoInviteStaff() {
    cy.get('.gh-nav-list.gh-nav-manage').contains('Staff').click();
    cy.get(".gh-btn.gh-btn-green").contains('Invite people').click();
    cy.get("#new-user-email").type("aaaaaaaaa");
    cy.get(".gh-btn.gh-btn-green.gh-btn-icon").contains("Send invitation now").click()
    cy.wait(1000);
  }