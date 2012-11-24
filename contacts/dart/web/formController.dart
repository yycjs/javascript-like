library contacts;

import 'dart:html';
import 'contactListController.dart';

class FormController {
  FormElement form;
  ButtonElement newContact;
  FormController(FormElement form, ContactListController list, ButtonElement newContact) {
    this.form = form;
    this.newContact = newContact;
    this.hideForm();
    this.newContact.on.click.add(this.createNewContact);
    form.on.submit.add(this.submit);
    form.query('.buttons .save').on.click.add(this.submit);
    form.query('.buttons .cancel').on.click.add(this.cancelNewContact);
  }

  void hideForm() {
    this.form.classes.add('hidden');
  }

  void showForm() {
    this.form.classes.remove('hidden');
  }

  void createNewContact(Event e) {
    this.showForm();
  }
  void cancelNewContact(Event e) {
    this.hideForm();
  }
  
  void submit(Event e) {
    e.preventDefault();
  }
}
