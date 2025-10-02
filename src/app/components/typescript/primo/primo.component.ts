import { Component } from '@angular/core';

@Component({
  selector: 'app-primo',
  imports: [],
  templateUrl: './primo.component.html',
  styleUrl: './primo.component.css'
})
export class PrimoComponent {
  num:number=3;
  primo!:string;

  verificaprimo(num:number){
    if (num<=1){
      this.primo='não é primo'
    }
    else if (num==2){
      this.primo='é primo'
    }
    else if (num%2==0){
      this.primo='não é primo'
    }

    const limit = Math.sqrt(num);
    for (let  i=3;i<=limit;i+=2){
      if (num%i==0){
        this.primo='não é primo';
      }
    }
    this.primo='é primo';
  }

  constructor (){
    this.verificaprimo(this.num);
  }
}
