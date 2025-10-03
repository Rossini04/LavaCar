import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IdadeComponent } from './components/typescript/idade/idade.component';
import { ConverteNotaComponent } from './components/typescript/converte-nota/converte-nota.component';
import { PrimoComponent } from './components/typescript/primo/primo.component';
import { CadastroFornecedorComponent } from './components/cadastro-fornecedor/cadastro-fornecedor.component';
import { ListarFornecedorComponent } from './components/listar-fornecedor/listar-fornecedor.component';
import { CadastroProdutoComponent } from './components/produtos/cadastro-produto/cadastro-produto.component';
import { ListarProdutosComponent } from './components/produtos/listar-produtos/listar-produtos.component';
import { ListarProdutosFornecedorComponent } from './components/fornecedores/listar-produtos-fornecedor/listar-produtos-fornecedor.component';
import { CadastroServicoComponent } from './components/servicos/cadastro-servico/cadastro-servico.component';
import { ListarServicosComponent } from './components/servicos/listar-servicos/listar-servicos.component';

export const routes: Routes = [

    { path: '', component: HomeComponent },
    { path: 'idade', component: IdadeComponent },
    { path: 'convertenota', component: ConverteNotaComponent },
    { path: 'primo', component: PrimoComponent },
    { path: 'fornecedores/cadastro-fornecedor', component: CadastroFornecedorComponent },
    { path: 'fornecedores/listar-fornecedores', component: ListarFornecedorComponent },
    { path: 'fornecedores/editar-fornecedor/:id', component: CadastroFornecedorComponent },
    { path: 'produtos/cadastro-produto', component: CadastroProdutoComponent },
    { path: 'produtos/listar-produtos', component: ListarProdutosComponent },
    { path: 'produtos/editar-produto/:id', component: CadastroProdutoComponent },
    { path: 'fornecedor/:id/produtos', component: ListarProdutosFornecedorComponent },
    { path: 'servicos/cadastro-servico', component: CadastroServicoComponent },
    { path: 'servicos/listar-servicos', component: ListarServicosComponent },
];
