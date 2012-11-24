/// <reference path="./contact.ts"/>

declare var $:any;

class ContactManager {
  private contactHtml;

  constructor() {
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

    var contactHtml$ = $(this.contactHtml);

    contactHtml$.find('.remove').click(function () {
      contactHtml$.remove();
    });

    contactHtml$.find('[name="name"]').change(function () {
      console.log('name = ' + $(this).val());
    });

    contactHtml$.find('[name="address"]').change(function () {
      console.log('address = ' + $(this).val());
    });

    contactHtml$.find('[name="phone"]').change(function () {
      console.log('phone = ' + $(this).val());
    });

    contactHtml$.find('[name="email"]').change(function () {
      console.log('email = ' + $(this).val());
    });

    contactHtml$.appendTo($('#contacts > ul.clearfix'));

  }
}