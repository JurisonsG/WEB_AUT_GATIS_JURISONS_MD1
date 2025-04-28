import { SelectGridPage} from "../PageObjects.js/SelectGridPage";


describe('DemoQA selectable grid', () => {
  context('Testing grid items selection', () => {

    it('select even numbers and validate highlights', () => {

      SelectGridPage.open();
      SelectGridPage.gridTabButton.click();

      // Click on "Two", "Four", "Six", "Eight"
      SelectGridPage.numberItem.contains('Two').click();
      SelectGridPage.numberItem.contains('Four').click();
      SelectGridPage.numberItem.contains('Six').click();
      SelectGridPage.numberItem.contains('Eight').click();

      // Validate that "Two", "Four", "Six", "Eight" are highlighted
      SelectGridPage.selectedItem.contains('Two').should('have.class', 'active');
      SelectGridPage.selectedItem.contains('Four').should('have.class', 'active');
      SelectGridPage.selectedItem.contains('Six').should('have.class', 'active');
      SelectGridPage.selectedItem.contains('Eight').should('have.class', 'active');

      // Validate that "One", "Three", "Five", "Seven", "Nine" are not highlighted
      SelectGridPage.numberItem.contains('One').should('not.have.class', 'active');
      SelectGridPage.numberItem.contains('Three').should('not.have.class', 'active');
      SelectGridPage.numberItem.contains('Five').should('not.have.class', 'active');
      SelectGridPage.numberItem.contains('Seven').should('not.have.class', 'active');
      SelectGridPage.numberItem.contains('Nine').should('not.have.class', 'active');

    });
  });
});
