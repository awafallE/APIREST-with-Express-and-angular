import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { produit } from './models/produit'
@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  baseUrl = 'http://localhost:3100/api/v1';

  constructor(private httpClient: HttpClient) {
    
  }
  getProduit():Observable <produit[]> {
    return this.httpClient.get<produit[]>(`${this.baseUrl}/products`);

  }
}
