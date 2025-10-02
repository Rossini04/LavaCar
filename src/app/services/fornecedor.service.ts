import { Injectable } from '@angular/core';
import { Fornecedor } from '../models/fornecedor.model';
import { db, DbService } from './db.service';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {
  //Injeção de dependencia via inject
  //private dbService = inject(DbService);


  //Injeção de dependencia via constructor
  constructor(private dbService: DbService) { }

    addFornecedor(fornecedor: Fornecedor) {
      return this.dbService.fornecedores.add(fornecedor);
    }

    getAllFornecedores(): Promise < Fornecedor[] > {
      return this.dbService.fornecedores.toArray();    
    }
    getFornecedorById(id: number) {
      return db.fornecedores.get(id);
      }
      updateFornecedor(fornecedor: Fornecedor) {
      return db.fornecedores.put(fornecedor);
      }
      deleteFornecedor(id: number) {
      return db.fornecedores.delete(id);
      }
}
