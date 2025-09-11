import * as locatorSneltoetsAcceptatie from '../locators/sneltoetsAcceptatie.json'

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://mijn.nhg.nl')

    cy.get(locatorSneltoetsAcceptatie.forTextSneltoetsAcceptatie)
      .invoke('text')
      .then((text) => text.trim())
      .should('eq', 'Sneltoets Acceptatie')

    cy.get(locatorSneltoetsAcceptatie.forTextNhgSneltoets)
      .invoke('text')
      .then((text) => text.trim())
      .should('eq', 'NHG Sneltoets')
    
    cy.get(locatorSneltoetsAcceptatie.forTextSprakeVanRestschuld)
      .invoke('text')
      .then((text) => text.trim())
      .should('eq', 'Sprake van restschuld')

    cy.get('.mx-name-radioButtons1 .mx-radiogroup .radio input[value="false"]').eq(0)
      .check({force: true})
      .should('be.checked');


  })
})