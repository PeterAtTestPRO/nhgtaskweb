import { NhgSneltoetsPage } from '../pageObjects/nhgSneltoetsPage'

describe('Sneltoets Acceptatie - Test scripts', () => {
  const nhgSneltoetsPage = new NhgSneltoetsPage()

  it('submits a request for a quick check calculation with "medeaanvrager" with "financiële verplichtingen".', () => {
    cy.visit('/')

    nhgSneltoetsPage.checkForTextSneltoetsAcceptatie()

    nhgSneltoetsPage.checkForTextNhgSneltoets()

    nhgSneltoetsPage.checkForTextSprakeVanRestschuld()
    nhgSneltoetsPage.selectNoForSprakeVanRestschuld()
  
    nhgSneltoetsPage.checkForTextAlgemeneGegevens()

    nhgSneltoetsPage.checkForTextGewenstLeenbedrag()
    nhgSneltoetsPage.fillGewenstLeenbedrag(400000)  

    nhgSneltoetsPage.checkForTextWaarvanInBox3()
    nhgSneltoetsPage.fillWaarvanInBox3(100000)

    nhgSneltoetsPage.checkForTextHypotheekrente()
    nhgSneltoetsPage.fillHypotheekrente("4,25")

    nhgSneltoetsPage.checkForTextGewensteLooptijd()
    nhgSneltoetsPage.fillGewensteLooptijd(360)

    nhgSneltoetsPage.checkForTextJaarlijksErfpachtcanon
    nhgSneltoetsPage.fillJaarlijksErfpachtcanon

    nhgSneltoetsPage.checkForTextEnergielabel
    nhgSneltoetsPage.selectFromListEnergieLabel()

    // nhgSneltoetsPage.checkForTextGeboorteDatum
    nhgSneltoetsPage.fillGeboorteDatum

    // nhgSneltoetsPage.checkForTextBrutoJaarinkomen
    nhgSneltoetsPage.fillBrutoJaarinkomen

    // nhgSneltoetsPage.checkForText
    // nhgSneltoetsPage.fill

    nhgSneltoetsPage.checkForTextBereken()
    nhgSneltoetsPage.clickButtonBereken()

  })
})