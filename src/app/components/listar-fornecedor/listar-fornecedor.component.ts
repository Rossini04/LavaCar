import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FornecedorService } from '../../services/fornecedor.service';
import Swal from 'sweetalert2';
import { FormControl } from '@angular/forms';
import { Fornecedor } from '../../models/fornecedor.model';

@Component({
  selector: 'app-listar-fornecedor',
  imports: [],
  templateUrl: './listar-fornecedor.component.html',
  styleUrl: './listar-fornecedor.component.css'
})
export class ListarFornecedorComponent implements OnInit {
produtos: any;
  viewProdutosFornecedor(arg0: any) {
    throw new Error('Method not implemented.');
  }
  fornecedores: any[] = [];
  filtro = new FormControl('');
  constructor(private fornecedorService: FornecedorService, private router:
    Router) { }

  ngOnInit(): void {
    this.getAllFornecedores();
  }

  getAllFornecedores() {
    this.fornecedorService.getAllFornecedores().then(fornecedores => {
      this.fornecedores = fornecedores;
    });
  }
  getFornecedoresFiltrados(): Fornecedor[] {
    const filtro = this.filtro.value?.toLowerCase() || '';
    return this.fornecedores.filter(fornecedor => {
      return fornecedor.nome.toLowerCase().includes(filtro) ||
        fornecedor.cnpj.toLowerCase().includes(filtro) ||
        fornecedor.fone.toLowerCase().includes(filtro);
    });
  }
  editFornecedor(id: number) {
    this.router.navigate(['/fornecedores/editar-fornecedor', id]);
  }
  deleteFornecedor(id: number) {
    Swal.fire({
      title: 'Tem certeza?',
      text: 'Esta ação não pode ser desfeita!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, excluir!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.fornecedorService.deleteFornecedor(id).then(() => {
          this.getAllFornecedores();
        });
        Swal.fire('Excluído!', 'O fornecedor foi excluído com sucesso.', 'success');
      }
    });
  }
}
