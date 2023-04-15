import { Component, OnInit } from '@angular/core';
import { cartas } from 'src/mock/cartasMock';
import { cardInterface } from '../card/interfaces/card-interface';

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  styleUrls: ['./mesa.component.scss']
})

export class MesaComponent {

  public loading = true;
  public atributoSelecionado!: number;
  public BaralhoCompleto = cartas;
  public deckDoJogardor: Array<cardInterface> = []
  public deckDoRobo: Array<cardInterface> = []

  public cartaJogador: any;
  public cartaRobo: any;


	constructor() {
    this.destribuirBaralhos();
    this.cartasIniciais();
  }

  ngOnInit(): void {
    
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
  }

  destribuidorDeCartasRobo(){
		this.deckDoRobo = this.BaralhoCompleto.filter((carta) => !this.deckDoJogardor.includes(carta));
    console.log(this.deckDoRobo)
     console.log(this.deckDoRobo[0].indice.substr(0,1))
   }

  cartasIniciais(){
     this.cartaJogador = this.deckDoJogardor[0];
     this.cartaRobo    = this.deckDoRobo[0];
   }

  destribuirBaralhos(){
    this.destribuidorDeCartasJogador();
    this.destribuidorDeCartasRobo();
  }

  duelo(indicie:any){
	  let primeiraCartaJogador:any = this.deckDoJogardor.shift();
		let primeiraCartaRobo: any = this.deckDoRobo.shift();

    if(this.deckDoRobo.length == 0 || this.deckDoJogardor.length == 0){
      if(this.deckDoJogardor.length == 0 ) {
        alert ("Jogador campeao");
      }else{
        alert("Robo campeao");
      }
    }else{
      if((this.deckDoJogardor[0].indice == "S10" && this.deckDoRobo[0].indice.substr(0,1) == "A") || (this.deckDoRobo[0].indice == "S10" && this.deckDoJogardor[0].indice.substr(0,1) == "A")){
        if(this.deckDoJogardor[0].indice == "S10" && this.deckDoRobo[0].indice.substr(0,1) == "A"){
          this.deckDoRobo.push(primeiraCartaJogador);
          this.deckDoRobo.push(primeiraCartaRobo)
        }else{
          this.deckDoJogardor.push(primeiraCartaJogador);
          this.deckDoJogardor.push(primeiraCartaRobo);
        }
        this.cartasIniciais()
      }

      if(this.deckDoJogardor[0].atributos[indicie].valor > this.deckDoRobo[0].atributos[indicie].valor){
        this.deckDoJogardor.push(primeiraCartaJogador);
        this.deckDoJogardor.push(primeiraCartaRobo);
      }else{
        this.deckDoRobo.push(primeiraCartaJogador);
        this.deckDoRobo.push(primeiraCartaRobo)
      }
      this.cartasIniciais()
    }
   }

  selecionarAtributo(index: number): void {
    this.atributoSelecionado = index;
  }
}

