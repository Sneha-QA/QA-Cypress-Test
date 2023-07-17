class ContactAppPage{

    //InputFields of ContactAppPage
    getNameInputField(){
        return cy.get("input[placeholder='Name']");
    }

    getPhoneInputField(){
        return cy.get("input[placeholder='Phone']");
    }

    getEmailInputField(){
        return cy.get("input[placeholder='Email']");
    }

    getEditableNameInputField(){
        return cy.get("#app > table > tbody > tr:nth-child(2) > td:nth-child(1) > input[type=text]");
    }

    getEditablePhoneInputField(){
        return cy.get("#app > table > tbody > tr:nth-child(2) > td:nth-child(2) > input[type=text]");
    }

    getEditableEmailInputField(){
        return cy.get("#app > table > tbody > tr:nth-child(2) > td:nth-child(3) > input[type=text]");
    }

    getNameTableColumn(){
        return cy.get("#app > table > tbody > tr:nth-child(2) > td:nth-child(1)");
    }

    getPhoneTableColumn(){
        return cy.get("#app > table > tbody > tr:nth-child(2) > td:nth-child(2)");
    }

    getEmailTableColumn(){
        return cy.get("#app > table > tbody > tr:nth-child(2) > td:nth-child(3)");
    }

    //Buttons of ContactAppPage
    contactAddButton(){
        return cy.get("button[name='add']");
    }

    contactEditButton(){
        return cy.get("button[name='edit']");
    }

    contactUpdateButton(){
        return cy.get("button[name='update']");
    }

    contactDeleteButton(){
        return cy.get("button[name='delete']");
    }

}

export default ContactAppPage;