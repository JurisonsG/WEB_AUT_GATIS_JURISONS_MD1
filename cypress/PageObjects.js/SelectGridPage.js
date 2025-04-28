import { BasicPage } from "./BasicPage";

export class SelectGridPage extends BasicPage {
  static get url() {
    return 'selectable';
  }

  static get gridTabButton() {
    return cy.get('a#demo-tab-grid');
  }

  static get numberItem() {
    return cy.get('li.list-group-item');
  }

  static get selectedItem() {
    return cy.get('li.list-group-item.active');
  }
}
