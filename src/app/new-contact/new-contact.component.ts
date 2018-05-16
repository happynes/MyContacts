import { Component, OnInit } from '@angular/core';
import { Contact } from '../../Model/model.contact';
import { ContactsService } from '../../Services/contact.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
contact:Contact=new Contact();
mode:number=1;
  constructor(public contactservice:ContactsService) { }

  ngOnInit() {
  }
saveContact(){
  this.contactservice.SaveContact(this.contact).
  subscribe(data=> {this.contact=data ;
  this.mode=2;})
}

}
