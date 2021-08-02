import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './portalrede/header/header.component';
import { BodyComponent } from './portalrede/body/body.component';
import { FooterComponent } from './portalrede/footer/footer.component';
import { AutenticationComponent } from './portalrede/autentication/autentication.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    AutenticationComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule,
    TooltipModule,
    ModalModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
