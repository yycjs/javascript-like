library contacts;

import 'dart:collection';
import 'contact.dart';

Map<num, Contact> contacts;
Map<String, Map> lists;

class ContactListController {
  
  ContactListController(List<Contact> initialContacts){
    contacts = new HashMap<num, Contact>();
    lists = new HashMap<String, Map>();
    initialContacts.forEach( (i){ addContact(i); });
  }
  
  void addContact(Contact contact){
    contacts.putIfAbsent(contact.id, (){return contact;});
    if(!lists.containsKey(contact.type)){
      lists[contact.type] = new HashMap<num, Contact>();
    }
    lists[contact.type][contact.id] = contact;
  }
  
  void removeContact(num contactId){
    contacts.remove(contactId);
  }
  
  List<Contact> getContactList(String listName){
    if(lists.containsKey(listName)){
      return lists[listName].values;
    }else{
      return new List();
    }
  }
  
}
