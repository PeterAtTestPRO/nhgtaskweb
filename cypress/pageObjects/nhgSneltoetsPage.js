import * as locatorSneltoetsAcceptatie from '../locators/sneltoetsAcceptatie.json'

export class NhgSneltoetsPage {

    checkForTextAlgemeneGegevens() {
      cy.get(locatorSneltoetsAcceptatie.forTextAlgemeneGegevens)
        .invoke('text')
        .then((text) => text.trim())
        .should('eq', 'Algemene gegevens')
    }
    
    checkForTextEnergielabel() {
      // to be done later
    }

    checkForTextGewensteLooptijd() {
      cy.get(locatorSneltoetsAcceptatie.forTextGewensteLooptijd)
        .invoke('text')
        .then((text) => text.trim())
        .should('eq', 'Gewenste looptijd')
    }

    checkForTextGewenstLeenbedrag() {
      cy.get(locatorSneltoetsAcceptatie.forTextGewenstLeenbedrag)
        .invoke('text')
        .then((text) => text.trim())
        .should('eq', 'Gewenst leenbedrag')
    }

    checkForTextHypotheekrente() {
      cy.get(locatorSneltoetsAcceptatie.forTextHypotheekrente)
        .invoke('text')
        .then((text) => text.trim())
        .should('eq', 'Hypotheekrente')
    }

    checkForTextJaarlijksErfpachtcanon() {
      // to be done later
    }

    checkForTextNhgSneltoets() {
      cy.get(locatorSneltoetsAcceptatie.forTextNhgSneltoets)
        .invoke('text')
        .then((text) => text.trim())
        .should('eq', 'NHG Sneltoets')
    }

    checkForTextSneltoetsAcceptatie() {
      cy.get(locatorSneltoetsAcceptatie.forTextSneltoetsAcceptatie)
        .invoke('text')
        .then((text) => text.trim())
        .should('eq', 'Sneltoets Acceptatie')
    }

    checkForTextSprakeVanRestschuld() {
      cy.get(locatorSneltoetsAcceptatie.forTextSprakeVanRestschuld)
        .invoke('text')
        .then((text) => text.trim())
        .should('eq', 'Sprake van restschuld')
    }

    checkForTextWaarvanInBox3() {
      cy.get(locatorSneltoetsAcceptatie.forTextWaarvanInBox3)
        .invoke('text')
        .then((text) => text.trim())
        .should('eq', 'Waarvan in box 3')
    }
    
    fillEnergielabel() {

    }

    fillGewensteLooptijd(amount) {
      cy.get(locatorSneltoetsAcceptatie.forInputfieldGewensteLooptijd)
        .clear()
        .type(amount)
    }

    fillGewenstLeenbedrag(amount) {
      cy.get(locatorSneltoetsAcceptatie.forInputfieldGewenstLeenbedrag, )
        .clear()
        .type(400000)
    }

    fillHypotheekrente(amount) {
      cy.get(locatorSneltoetsAcceptatie.forInputfieldHypotheekrente)
        .clear()
        .type(amount)
    }
    
    fillJaarlijksErfpachtcanon() {
      // to be done later
    }

    fillWaarvanInBox3(amount) {
      cy.get(locatorSneltoetsAcceptatie.forInputfieldWaarvanInBox3)
        .clear()
        .type(amount)
    }

    selectNoForSprakeVanRestschuld() {
      cy.get('.mx-name-layoutGrid2 .mx-name-radioButtons1 .mx-radiogroup .radio input[value="false"]')
        .check({force: true})
        .should('be.checked');
    }

    selectFromListEnergieLabel() {
		cy.get('.mx-name-dropDown1 select option')
			.should('have.length.greaterThan', 0)
			.then((options) => {
        let optionChosen = Math.floor((Math.random() * options.length - 1 ) + 1)
        cy.log(optionChosen)
        cy.get('.mx-name-dropDown1 select')
					.select(optionChosen, { force: true })

			})
	}









}