import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProduitComponent } from './produit/produit.component';
import { UserListComponent } from './user-list/user-list.component';

import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    
    ProduitComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
   
    BrowserAnimationsModule,
    MaterialModule

   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
