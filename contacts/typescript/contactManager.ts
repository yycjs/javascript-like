/// <reference path="./contact.ts"/>
/// <reference path="./contactStore.ts"/>

declare var $:any;

class ContactManager {
  private contactHtml;
  private store;

  constructor() {
    this.store = new ContactStore();

    var cm = this;

    $.ajax({
      url:'contact.html',
      success: function(html) { cm.contactHtml = html; },
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

    var contactHtml$ = $(this.contactHtml);

    contactHtml$.find('.remove').click(function () {
      contactHtml$.remove();
    });

    contactHtml$.find('[name="name"]').change(function () {
      contact.set('firstName', $(this).val());
      console.log(contact.get('firstName'));
    });

    contactHtml$.find('[name="address"]').change(function () {
      contact.set('address', $(this).val());
      console.log(contact.get('address'));
    });

    contactHtml$.find('[name="phone"]').change(function () {
      contact.set('phone', $(this).val());
      console.log(contact.get('phone'));
    });

    contactHtml$.find('[name="email"]').change(function () {
      contact.set('email', $(this).val());
      console.log(contact.get('email'));
    });

    contactHtml$.appendTo($('#contacts > ul.clearfix'));

  }
}