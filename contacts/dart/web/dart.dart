import 'dart:html';
import 'contact.dart';

void main() {
  Contact c = new Contact("Test", "test@example.com");
  query('#contacts ul').elements.add(c.render());
}
