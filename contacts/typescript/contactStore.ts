///<reference path="contact.ts" />

class ContactStore {
  private contacts;

  constructor() {
    // TODO: change this to a dictionary so that deletes are easy
    this.contacts = [];
  }

  get(email:String) {
    this.contacts.indexOf('email', function (email, item) {
      //comparator
      if (item.email === email) return true;
    });
  }

  save(contact:Contacts.Contact) {
    this.contacts.push(contact);
  }

  printAll() {
    this.contacts.forEach(function (contact) {
      console.log(contact);
    });
  }



//  getAll() {
//    return this.contacts;
//  }
//
//  save(contact : Contacts){
//    this.contacts.push(contact);
//  }
//
//  delete(email:String) {
//
//  }
//
//  update (contract: Contacts.Contact) {
//
//  }
}