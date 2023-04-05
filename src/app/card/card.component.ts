import { Component, OnInit } from '@angular/core';
import { cartas } from 'src/mock/cartasMock';
import { cardInterface } from './interfaces/card-interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  public loading = true;
  public atributoSelecionado!: number;

  constructor() {
    console.log(this.deckDeCartas);
    
  }

  ngOnInit(): void {
    this.sortearCartas();
  }

  public deckDeCartas = cartas;
  public deckDoJogardor: Array<cardInterface> = []
  public deckDoRobo: Array<cardInterface> = []


  public carta = this.deckDeCartas[0];

  /*sortearCartas(){
      this.deckDoJogardor = this.deckDeCartas[this.indiceAleatorio];
      this.deckDoRobo = this.deckDeCartas[this.indiceAleatorio];
    console.log(this.deckDoJogardor);
    console.log(this.deckDoRobo);
    
  }*/

  sortearCartas(){
    for(let i = 0; i <= 5; i ++){
      const indiceAleatorio = Math.floor(Math.random() * this.deckDeCartas.length);
      const cartaAleatoria = this.deckDeCartas[indiceAleatorio]; 
      this.deckDoJogardor.push(cartaAleatoria);
    }

      console.log(this.deckDoJogardor)
  }

  selecionarAtributo(index: number): void {
    this.atributoSelecionado = index;
  }
}
