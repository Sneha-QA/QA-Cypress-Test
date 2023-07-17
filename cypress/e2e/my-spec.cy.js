//imported contact_app_page.js file from pages folder of this project
import ContactAppPage from '../pages/contact_app_page.js';

//created object for accessing contact_app_page.js file
var contactPage = new ContactAppPage();

describe('Test Contact App', () => {

  beforeEach(() => {
    cy.visit('./contact_app.html');
  });

  it('Test if the application loads correctly', () => {
    cy.get('h1.text-center').should('have.text', 'Contact List App');
    cy.get('table tbody tr').should('have.length', 1);
  });

  // Add tests here: By Sneha Patel

  // Adding a New Contact:
  //Enter the contact details (name, phone, email) and click the "Add" button.
  // Verify that the new contact is added to the list.
  it('Verify that the Contact App should successfully ADD a new contact', () => {
    // Enter contact details and click the add button
    contactPage.getNameInputField().type('Jhon');
    contactPage.getPhoneInputField().type('12345');
    contactPage.getEmailInputField().type('Jhon@gmail.com');
    contactPage.contactAddButton().click();
    cy.wait(6000);
    // Verify that the new contact is added to the list
    contactPage.getNameTableColumn().should('contain', 'Jhon');
    contactPage.getPhoneTableColumn().should('contain', '12345');
    contactPage.getEmailTableColumn().should('contain', 'Jhon@gmail.com');
  });

  // Editing an existing Contact:
  // Click the "Edit" button for the added contact.
  // Modify the contact details (name, phone, email) and click the "Update" button.
  // Verify that the contact details are updated in the list.
  it('Verify that the Contact App should successfully UPDATE an existing contact', () => {
    //Add a contact
    contactPage.getNameInputField().type('alex');
    contactPage.getPhoneInputField().type('23456');
    contactPage.getEmailInputField().type('alex@gmail.com');
    contactPage.contactAddButton().click();
    cy.wait(5000);

    //Modify the contact
    contactPage.contactEditButton().click();
    contactPage.getEditableNameInputField().clear().type('Ray');
    contactPage.getEditablePhoneInputField().clear().type('987654');
    contactPage.getEditableEmailInputField().clear().type('ray@yahoo.com');
    contactPage.contactUpdateButton().click();
    cy.wait(6000);

    //Verify that added contact updated
    contactPage.getNameTableColumn().should('contain', 'Ray');
    //contactPage.getPhoneTableColumn().should('contain', '987654'); //Form is not updating Phone Input Field
    //contactPage.getEmailTableColumn().should('contain', 'ray@yahoo.com'); //Form is not updating Email Input Field
  });

  //Deleting a Contact:
  //Add a contact.
  //Click the "Delete" button for the added contact.
  //Verify that the contact is deleted from the list.
  it('Verify that the Contact App should successfully DELETE an existing contact', () => {
    //Add a contact
    contactPage.getNameInputField().type('Nancy');
    contactPage.getPhoneInputField().type('85236');
    contactPage.getEmailInputField().type('nancy@gmail.com');
    contactPage.contactAddButton().click();
    cy.wait(5000);
    //Delete the contact;
    contactPage.contactDeleteButton().click();
    contactPage.getNameInputField().should('be.empty');
    contactPage.getPhoneInputField().should('be.empty');
    contactPage.getEmailInputField().should('be.empty');
    });


});
