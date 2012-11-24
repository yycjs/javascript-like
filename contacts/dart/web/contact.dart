library contacts;

class Address {
  
}
class Contact {
  String name;
  String phone;
  String email;
  Address homeAddress;
  String image;
  
  Contact(this.name, this.email);
  
  String toString() {
    // '<div>{{name}}</div>'
    return "";
  }
}
