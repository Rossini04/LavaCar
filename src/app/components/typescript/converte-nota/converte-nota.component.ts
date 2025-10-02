import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-converte-nota',
  imports: [CommonModule,FormsModule],
  templateUrl: './converte-nota.component.html',
  styleUrl: './converte-nota.component.css'
})
export class ConverteNotaComponent {
  nota:number | null = null;
  conceito:string='';

  constructor (){
    // this.convertenota(this.nota);
  }

  convertenota (){
    if (this.nota!=null){
      switch (true){
        case (this.nota>=90&&this.nota<=100): 
          this.conceito='A';
        break;
      case (this.nota>=80&&this.nota<=89):
        this.conceito='B';
        break;
      case (this.nota>=70&&this.nota<=79):
        this.conceito='C';
      break;
      case (this.nota>=60&&this.nota<=69):
        this.conceito='D';
      break;
      case (this.nota>=0&&this.nota<=59):
        this.conceito='F';
      break;
      default:
        this.conceito='Nota Inválida';
      }
    }
  }
}


