import { ActivatedRoute, Route, Router } from '@angular/router';
import { Produto } from '../../../models/produto.model';
import { ProdutoService } from '../../../services/produto.service';
import { Component } from '@angular/core';
import { FornecedorService } from '../../../services/fornecedor.service';

@Component({
  selector: 'app-listar-produtos-fornecedor',
  imports: [],
  templateUrl: './listar-produtos-fornecedor.component.html',
  styleUrl: './listar-produtos-fornecedor.component.css'
})
export class ListarProdutosFornecedorComponent {
  produtos: Produto[] = [];
  fornecedorId!: number;
  nomeFornecedor!: string;
  fornecedorService: any;
  constructor(private router: Router,private route: ActivatedRoute, private produtoService: ProdutoService) { }
  viewProdutosFornecedor(id: number) {
    this.router.navigate(['/fornecedor', id, 'produtos']);
  }
  ngOnInit() {
    this.fornecedorId = Number(this.route.snapshot.paramMap.get('id'));
    this.getProdutosByFornecedorId(this.fornecedorId);
  }
  async getProdutosByFornecedorId(fornecedorId: number) {
    this.produtos = await this.produtoService.getProdutosByFornecedorId(fornecedorId);
  }
  async getNomeFornecedorById(fornecedorId: number) {
    const fornecedor = await this.fornecedorService.getFornecedorById(fornecedorId);
    this.nomeFornecedor = fornecedor.nome;
  }
}
