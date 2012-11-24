var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Contacts;
(function (Contacts) {
    var Contact = (function () {
        function Contact(firstName, lastName, mainPhone, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.mainPhone = mainPhone;
            this.email = email;
        }
        Contact.prototype.get = function (name) {
            if(this[name]) {
                return this[name];
            }
            return null;
        };
        Contact.prototype.set = function (name, val) {
            if(this[name]) {
                this[name] = val;
            }
        };
        return Contact;
    })();
    Contacts.Contact = Contact;    
    var Coworker = (function (_super) {
        __extends(Coworker, _super);
        function Coworker(firstName, lastName, officePhone, mobile, email, officeNumber) {
                _super.call(this, firstName, lastName, officePhone, email);
            this.mobilePhone = mobile;
            this.officePhone = officePhone;
            this.officeNumber = officeNumber;
        }
        return Coworker;
    })(Contact);
    Contacts.Coworker = Coworker;    
    var Friend = (function (_super) {
        __extends(Friend, _super);
        function Friend(firstName, lastName, home, mobile, email) {
                _super.call(this, firstName, lastName, mobile, email);
            this.mobilePhone = mobile;
            this.homePhone = home;
        }
        return Friend;
    })(Contact);
    Contacts.Friend = Friend;    
    var Family = (function (_super) {
        __extends(Family, _super);
        function Family(firstName, lastName, home, mobile, email, relationship) {
                _super.call(this, firstName, lastName, home, mobile, email);
            this.relationship = relationship;
        }
        return Family;
    })(Friend);
    Contacts.Family = Family;    
})(Contacts || (Contacts = {}));
