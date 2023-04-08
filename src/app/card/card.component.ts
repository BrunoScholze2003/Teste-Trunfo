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
  public temaDeBaralhoSelecionado: any = ""


  public carta = this.BaralhoCompleto[0]; // carta do thos fixa no momento

	constructor() {

  	}

    ngOnInit(): void {
    	this.destribuirBaralhos();
		this.novaRodada();
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
		}
		console.log(this.deckDoJogardor) 
   }

   	destribuidorDeCartasRobo(){
		this.deckDoRobo = this.BaralhoCompleto.filter((carta) => !this.deckDoJogardor.includes(carta));
		console.log(this.deckDoRobo)
   }

   	destribuirBaralhos(){
	   this.destribuidorDeCartasJogador();
	   this.destribuidorDeCartasRobo();
   }

   novaRodada(){
	   const atributoSelecionado:any = "";

	   if(this.temaDeBaralhoSelecionado = "herois"){
			if(this.deckDoJogardor[0].atributos > this.deckDoRobo[0].atributos){
				
			}
	   }
	   
	   
   }

  selecionarAtributo(index: number): void {
    this.atributoSelecionado = index;
  }
}
