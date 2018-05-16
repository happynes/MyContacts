import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../Services/contact.service';

@Component({
  selector: 'app-nouveau-contact',
  templateUrl: './nouveau-contact.component.html',
  styleUrls: ['./nouveau-contact.component.css']
})
export class NouveauContactComponent implements OnInit {

  constructor(public contactservice:ContactsService) { }

  ngOnInit() {
  }
  onSaveContact(dataForm){
this.contactservice.SaveContact(dataForm)
.subscribe(data=> {
  console.log("Okey")
})
  }
}
