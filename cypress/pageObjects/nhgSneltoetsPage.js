import * as locatorSneltoetsAcceptatie from '../support/helpers/locators/sneltoetsAcceptatie.json'

export class NhgSneltoetsPage {

    checkForTextAlgemeneGegevens() {
      cy.get(locatorSneltoetsAcceptatie.forTextAlgemeneGegevens)
        .invoke('text')
        .then((text) => text.trim())
        .should('eq', 'Algemene gegevens')
    }
    
    checkForTextBrutoJaarinkomen() {
      // to be done later
    }

    checkForTextBereken() {
      cy.get(locatorSneltoetsAcceptatie.forTextBereken)
        .invoke('text')
        .then((text) => text.trim())
        .should('eq', 'Bereken')
    }
    
    checkForTextEnergielabel() {
      // to be done later
    }

    checkForTextGeboorteDatum() {

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

    clickButtonBereken() {
      cy.get(locatorSneltoetsAcceptatie.forTextBereken)
        .click()
    }
    
    fillBrutoJaarinkomen() {
      cy.get('.mx-name-dataView2 .mx-name-textBox28 input.form-control')
        .clear()

    }

    fillEnergielabel() {
      // to be done later
    }

    fillGeboorteDatum() {
      cy.get('.mx-name-dataView2kop .mx-compound-control input.form-control')
      // cy.get('.mx-name-dataView2 .mx-compound-control input.form-control')
        .type('06-03-1990')

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
        cy.get('.mx-name-dropDown1 select')
					.select(optionChosen, { force: true })
			})
	}









}