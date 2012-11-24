declare var $: any;

module Contacts {

    // Base Contact Class
    // ---------------------------------------
    export class Contact {
      private firstName;
      private lastName;
      private mainPhone;
      private email;

      constructor (firstName: string, lastName: string, mainPhone: string, email: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.mainPhone = mainPhone;
        this.email = email;
      };

      public get (name: string) {
        if (this[name]) return this[name];

        return null;
      }

      public set (name: string, val: any) {
        if (this[name]) this[name] = val;
      }
      // public template (): string;
    }

    // Family Class
    // ---------------------------------------

    export class Family extends Contact {
      private homePhone;
      private mobilePhone;

      constructor (firstName: string, lastName: string, home: string, mobile: string, email: string) {
        super(firstName, lastName, mobile, email);
        this.mobilePhone = mobile;
        this.homePhone = home;
      };
    }
}

var contact1 = new Contacts.Contact("Johnny", "AppleSeed", "1 (555) 555-5555", "j.appleseed@apple.com");
var contact2 = new Contacts.Family("Jenny", "Bootstrap", "1 (555) 555-5555", "1 (555) 555-1234", "j.bootstrap@apple.com");

console.log(contact1, contact2);
