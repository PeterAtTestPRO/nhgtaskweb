import { NhgSneltoetsPage } from '../pageObjects/nhgSneltoetsPage'

describe('template spec', () => {
  const nhgSneltoetsPage = new NhgSneltoetsPage()

  it('passes', () => {
    cy.visit('https://mijn.nhg.nl')

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

    // nhgSneltoetsPage.checkForText
    // nhgSneltoetsPage.fill

    // nhgSneltoetsPage.checkForText
    // nhgSneltoetsPage.fill

    // nhgSneltoetsPage.checkForText
    // nhgSneltoetsPage.fill

    // nhgSneltoetsPage.checkForText
    // nhgSneltoetsPage.fill

    // nhgSneltoetsPage.checkForText
    // nhgSneltoetsPage.fill
  })
})