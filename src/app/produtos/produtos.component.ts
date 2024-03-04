import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {
  nome: FormControl = new FormControl('');
  preco: FormControl = new FormControl('');

  constructor(){
  }

  ngOnInit(): void {
  }

  salvar(): void {
    console.log(this.nome.value);
    console.log(this.preco.value);
  }
}
