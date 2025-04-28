export class BasicPage {
    static get url() {
      return '';
    }
  
    static open() {
      cy.visit(`${this.url}`);
    }
  }
  