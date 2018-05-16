import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";
import { ContactsService } from '../../Services/contact.service';
import { Router } from '@angular/router';
import { Contact } from '../../Model/model.contact';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
 
pageContacts:any;
motcle:string="";  
page:number=0;
size:number=20;
  constructor(public http:Http,public contactservice:ContactsService, public router:Router) { }

  ngOnInit() {
  
    

}

DoSearch() {
  this.contactservice.getContact(this.motcle,this.page,this.size)
  .subscribe(data=>
   this.pageContacts=data  
  )

}
chercher(){
this.DoSearch();
}
onEditContact(id:number){
  this.router.navigate(['editContact',id]);
}
ondeleteContact(contact:Contact){
  let confirm=window.confirm('etes vous sure');
  if(confirm==true){
    this.contactservice.deleteContact(contact.id).subscribe(data=>
    
       this.pageContacts.content.splice(
        this.pageContacts.content.indexof(contact),1
      )  
  );
  }

}
}
