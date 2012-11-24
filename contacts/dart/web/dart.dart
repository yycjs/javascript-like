import 'dart:html';
import 'contact.dart';
import 'formController.dart';

void main() {
  Contact c = new Contact("Test", "test@example.com");
  query('#contacts ul').elements.add(c.render());
  
  var controller = new Controller(query('#newContact'));
}
