declare var $: any;

declare module Contacts {

    // Base Contact Class
    // ---------------------------------------
    export class Contact {
      constructor (firstName: string, lastName: string, mainPhone: string, email: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.mainPhone = mainPhone;
        this.email = email;
      };

      get (name: string): any;
      set (name: string, val: any): void;
      template (): string;
    }

    // Family Class
    // ---------------------------------------

    class Family extends Contact {
      constructor (firstName: string, lastName: string, home: string, mobile: string, email: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.mainPhone = mobile;
        this.mobilePhone = mobile;
        this.homePhone = home;
        this.email = email;
      };
    }
}

var contact1 = new Conacts.Contact("Johnny", "AppleSeed", "1 (555) 555-5555", "j.appleseed@apple.com");
var contact2 = new Conacts.Family("Jenny", "Bootstrap", "1 (555) 555-5555", "1 (555) 555-1234", "j.bootstrap@apple.com");

console.log(contact1, contact2);
