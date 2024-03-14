Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function () {
    cy.get('#firstName').type('Ana Paula')
    cy.get('#lastName').type('Silva')
    cy.get('#email').type('anapaula.silva@hotmail.com')
    cy.get('#open-text-area').type('Teste')
    cy.get('button[type="submit"]').click()
})
