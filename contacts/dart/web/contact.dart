library contacts;

import 'dart:html';

class Address {
  
}

class Contact {
  num id;
  String name;
  String phone;
  String email;
  Address address;
  String image;
  String type;
  
  Contact(this.name, this.email);
  
  Element render() {
    return new Element.html(this.toString());
  }
  
  String toString() {
    return '''<li class="contact span8">
        <a href="javascript://" class="remove"><i class="icon-remove"></i></a>
        <div class="row">
          <div class="span2">
            <img src="img/contact.png" width="100" height="100">
           </div>
          <div class="span3">
            <input type="text" name="name" placeholder="Add Name" value="${this.name}">
            <select name="category">
              <option value="family">Family</option>
              <option value="friends">Friends</option>
              <option value="co-workers" selected="">Co-workers</option>
            </select>
          </div>
        <div class="span3">
          <label>Address</label>
          <input type="text" name="address" value="${this.address.toString()}">
          <label>Phone</label>
          <input type="text" name="phone" value="${this.phone}">
          <label>Email</label>
          <input type="text" name="email" value="${this.email}">
        </div>
      </div>
    </li>''';
  }
}
