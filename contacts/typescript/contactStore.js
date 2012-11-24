var ContactStore = (function () {
    function ContactStore() {
        this.contacts = [];
    }
    ContactStore.prototype.get = function (email) {
        this.contacts.indexOf('email', function (email, item) {
            if(item.email === email) {
                return true;
            }
        });
    };
    ContactStore.prototype.save = function (contact) {
        this.contacts.push(contact);
    };
    ContactStore.prototype.printAll = function () {
        this.contacts.forEach(function (contact) {
            console.log(contact);
        });
    };
    return ContactStore;
})();
