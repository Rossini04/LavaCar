import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FornecedorService } from '../../services/fornecedor.service';
import Swal from 'sweetalert2';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Fornecedor } from '../../models/fornecedor.model';

@Component({
  selector: 'app-listar-fornecedor',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './listar-fornecedor.component.html',
  styleUrl: './listar-fornecedor.component.css'
  })
export class ListarFornecedorComponent implements OnInit {
  produtos: any;
  fornecedores: Fornecedor[] = [];
  filtro = new FormControl('');
  fornecedoresFiltrados: Fornecedor[] = [];
  fornecedoresPaginados: Fornecedor[] = [];
  aplicarFiltrosEAtualizarPagina(): void {
  this.fornecedoresFiltrados = this.getFornecedoresFiltrados();
      this.paginaAtual = 1;
      this.atualizarPagina();
  }
  paginaAtual = 1;
  itensPorPagina  = 5;
  atualizarPagina(): void {
    const inicio = (this.paginaAtual - 1) * this.itensPorPagina;
    const fim = inicio + this.itensPorPagina;
    this.fornecedoresPaginados = this.fornecedoresFiltrados.slice(inicio, fim);
    
  }
  irParaPagina(pagina: number): void {
    if (pagina >= 1 && pagina <= this.totalPages) {
    this.paginaAtual = pagina;
    this.atualizarPagina();
    }
  }
  anterior(): void {
    if (this.paginaAtual > 1) {
    this.paginaAtual--;
    this.atualizarPagina();
    }
  }
  proxima(): void {
    if (this.paginaAtual < this.totalPages) {
    this.paginaAtual++;
    this.atualizarPagina();
    }
  }
  get totalPages(): number {
    return Math.ceil(this.fornecedoresFiltrados.length / this.itensPorPagina);
  }
  get paginasArray(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
  constructor(private fornecedorService: FornecedorService, private router: Router) { }

  viewProdutosFornecedor(id: number) {
    this.router.navigate(['/fornecedor', id, 'produtos']);
  }
  async ngOnInit(){
    this.filtro.valueChanges.subscribe(() =>{
      this.aplicarFiltrosEAtualizarPagina();
    });
    await this.carregarFornecedores();
  }

  async carregarFornecedores(): Promise<void> {
    this.fornecedores = await this.getAllFornecedores();
    this.aplicarFiltrosEAtualizarPagina();
  }

  async getAllFornecedores(): Promise<Fornecedor[]> {
    return await this.fornecedorService.getAllFornecedores();
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
