import { Component, OnInit } from '@angular/core';
import { produit } from '../models/produit';
import { ProduitService } from '../produit.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

 produitList$: Observable<produit[]>;

  constructor(private produitService: ProduitService) {
 
  }

  ngOnInit() {
    this.produitList$=this.produitService.getProduit();
  }
}
