import { Component, OnInit } from '@angular/core';
import { Contact } from '../../Model/model.contact';
import { ContactsService } from '../../Services/contact.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  contact:Contact =new Contact();
  mode:number=1;
  idContact:number;
    constructor(public contactservice:ContactsService, public activatedRoute:ActivatedRoute) {
      this.idContact=activatedRoute.snapshot.params["id"];
     // console.log(activatedRoute.snapshot.params["id"]);
     }
  
    ngOnInit() {
      this.contactservice.getContac(this.idContact).subscribe(data=>this.contact=data);
    }

     updateContact(){
    this.contactservice.updateContact(this.contact).
    subscribe(data=> {this.contact=data ;
    this.mode=2;}) 
  }

}
