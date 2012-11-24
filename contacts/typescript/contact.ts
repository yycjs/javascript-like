declare var $: any;

module Contacts {

    // Base Contact Class
    // ---------------------------------------
    export class Contact {
      private firstName;
      private lastName : string;
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

    // Co-Worker Class
    // ---------------------------------------

    export class Coworker extends Contact {
      private officePhone;
      private mobilePhone;
      private extension;
      private officeNumber;

      constructor (
        firstName: string, lastName: string,
        officePhone: string,
        mobile: string,
        email: string,
        officeNumber?: number
      ) {
        super(firstName, lastName, officePhone, email);
        this.mobilePhone = mobile;
        this.officePhone = officePhone;
        this.officeNumber = officeNumber;
      };
    }

    // Friend Class
    // ---------------------------------------

    export class Friend extends Contact {
      private homePhone;
      private mobilePhone;

      constructor (firstName: string, lastName: string, home: string, mobile: string, email: string) {
        super(firstName, lastName, mobile, email);
        this.mobilePhone = mobile;
        this.homePhone = home;
      };
    }

    // Family Class
    // ---------------------------------------

    export class Family extends Friend {
      private homePhone;
      private mobilePhone;
      private relationship;

      constructor (firstName: string, lastName: string, home: string, mobile: string, email: string, relationship: string) {
        super(firstName, lastName, home, mobile, email);
        this.relationship = relationship;
      };
    }
}

// var coworker = new Contacts.Coworker("Johnny", "AppleSeed", "1 (555) 555-5555", "1 (555) 555-6789", "j.appleseed@apple.com", 5);
// var friend = new Contacts.Friend("Jenny", "Bootstrap", "1 (555) 555-5555", "1 (555) 555-1234", "j.bootstrap@apple.com");
// var family = new Contacts.Family("Papa", "John", "1 (666) 666-6666", "1 (666) 666-1234", "p.john@apple.com", 'father');

// console.log(coworker, family, friend);
