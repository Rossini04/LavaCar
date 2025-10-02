import { Component } from '@angular/core';

@Component({
  selector: 'app-idade',
  imports: [],
  templateUrl: './idade.component.html',
  styleUrl: './idade.component.css'
})
export class IdadeComponent {
  idade:number = 14;
  resultado!:string; 
  constructor (){
    console.log (`A idade é ${this.idade}. Vamos dar início ao algoritmo.`);
    console.log ('A idade é: ',this.idade);
    if (this.idade<0){
      return;
    }
      else if (this.idade<=12){
        this.resultado = "Criança";
        }
         else if (this.idade<=17){
          this.resultado="Adolescente";
         }
          else if (this.idade<=59){
            this.resultado = "Adulto";
          }
            else if (this.idade>=60){
              this.resultado="Idoso";
            }
         }
  }

