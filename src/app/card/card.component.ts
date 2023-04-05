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
  public BaralhoCompleto = cartas;
  public deckDoJogardor: Array<cardInterface> = []
  public deckDoRobo: Array<cardInterface> = []


  public carta = this.BaralhoCompleto[0]; // carta do thos fixa no momento

	constructor() {
   		 console.log(this.BaralhoCompleto);
  	}

    ngOnInit(): void {
    	this.destribuidorDeCartasJogador();
  	}

 

  	destribuidorDeCartasJogador(){
    	const cartaDistribuida: Array<Number> = [];
    
		for(let i = 0; i <= 2; i ++){
			const indiceAleatorio = Math.floor(Math.random() * this.BaralhoCompleto.length);

			if (cartaDistribuida.includes(indiceAleatorio)) { 
				i = i - 1;
				continue;
			} 
			else {
				const cartaAleatoria = this.BaralhoCompleto[indiceAleatorio]; 
				this.deckDoJogardor.push(cartaAleatoria);
				cartaDistribuida.push(indiceAleatorio);   
			} 
			console.log(cartaDistribuida)
		}
		console.log(this.deckDoJogardor) 
   }

  selecionarAtributo(index: number): void {
    this.atributoSelecionado = index;
  }
}
