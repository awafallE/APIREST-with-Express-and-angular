import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { ProduitComponent } from './produit/produit.component';

const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'pro', component: ProduitComponent }
];
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
