import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { ContactsService } from '../Services/contact.service';
import { Http, ConnectionBackend, HttpModule } from '@angular/http';
import { NewContactComponent } from './new-contact/new-contact.component';
import { NouveauContactComponent } from './nouveau-contact/nouveau-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

const appRoutes:Routes =[
  {path : 'about',component:AboutComponent},
  {path : 'contacts',component:ContactsComponent},
  {path : 'new',component:NewContactComponent},
  {path : 'editContact/:id',component:EditContactComponent},
  {path : '',redirectTo:'/about',pathMatch:'full'},
]
;

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AboutComponent,
    NewContactComponent,
    NouveauContactComponent,
    EditContactComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
