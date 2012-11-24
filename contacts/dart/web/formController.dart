library contacts;

import 'dart:html';
import 'contactListController.dart';

class FormController {
  FormElement form;
  
  Controller(FormElement form, ContactListController list) {
    form.on.submit.add(this.submit);
  }
  
  void submit(Event e) {
    e.preventDefault();
  }
}
