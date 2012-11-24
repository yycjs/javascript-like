/// <reference path="./contact.ts"/>
/// <reference path="./contactStore.ts"/>
/// <reference path="./jQuery.d.ts"/>

//declare var $:any;

class ContactManager {
  private contactHtml: string;
  private store: ContactStore;

  constructor() {
    this.store = new ContactStore();

    var cm = this;

    $.ajax({
      url:'contact.html',
      success: (html: string) => { cm.contactHtml = html; },
      async: false
    });


    $('#new-contact').click(function () {
      cm.newContact();
    });
  }

  newContact() {
    var contact = new Contacts.Contact("Johnny", "Appleseed", "1234", "a@a.com");

    this.store.save(contact);
    this.store.printAll();

    var contactHtml$:JQuery = $(this.contactHtml);

    contactHtml$.find('.remove').click(function () {
      contactHtml$.remove();
    });

    contactHtml$.find('[name="name"]').change(function () {
      contact.set('firstName', $(this).val());
      console.log(contact);
    });

    contactHtml$.find('[name="address"]').change(function () {
      contact.set('address', $(this).val());
      console.log(contact.get('address'));
    });

    contactHtml$.find('[name="phone"]').change(function () {
      contact.set('mainPhone', $(this).val());
      console.log(contact);
    });

    contactHtml$.find('[name="email"]').change(function () {
      contact.set('email', $(this).val());
      console.log(contact.get('email'));
    });

    contactHtml$.appendTo($('#contacts > ul.clearfix'));

  }
}