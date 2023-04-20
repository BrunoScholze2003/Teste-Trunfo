import { COMPILER_OPTIONS, Component, OnInit } from '@angular/core';
import { cartas } from 'src/mock/cartasMock';
import { cardInterface } from '../card/interfaces/card-interface';

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  styleUrls: ['./mesa.component.scss']
})

export class MesaComponent {

public teste = [1,2,3,4,5]

  public loading = true;
  public atributoSelecionado!: number;
  public BaralhoCompleto = cartas;
  public deckDoJogardor: cardInterface[] = [];
  public deckDoRobo: cardInterface[] = [];
  public fimDeJogo: Boolean = false;
  public cartaJogador: any;
  public cartaRobo: any;

  public primeiraCartaJogador: any;
  public primeiraCartaRobo: any;

  public atributoSelecionadoRecebido!: number;


	constructor() {
    this.destribuirBaralhos();
    this.cartasBatalhando();
  }

  ngOnInit(): void {

  }

  onAtributoSelecionadoRecebido(atributoSelecionado: number) {
    this.atributoSelecionadoRecebido = atributoSelecionado;
  }

  destribuidorDeCartasJogador(){
    const cartaDistribuida: Array<Number> = [];

    for(let i = 0; i <= 1; i ++){
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

  cartasBatalhando(){
    this.cartaJogador = this.deckDoJogardor[0];
    this.cartaRobo    = this.deckDoRobo[0];
   }

  destribuirBaralhos(){
    this.destribuidorDeCartasJogador();
    this.destribuidorDeCartasRobo();
  }

  selecionarAtributo(index: number): void {
    this.atributoSelecionado = index;
  }

  cartasDaRodada(){ //Cartas que irão para o final do baralho do vencedor
    this.primeiraCartaJogador = this.deckDoJogardor.shift();
	  this.primeiraCartaRobo = this.deckDoRobo.shift();
  }

  roboVenceRodada(){
    this.cartasDaRodada();

    this.deckDoRobo.push(this.primeiraCartaJogador);
    this.deckDoRobo.push(this.primeiraCartaRobo);
    this.cartasBatalhando();
    console.log("Robo venceu");
    console.log(this.deckDoJogardor);
    console.log(this.deckDoRobo)
    this.verificaQtdCartas()
  }

  jogadorVenceRodada(){
    this.cartasDaRodada();

    this.deckDoJogardor.push(this.primeiraCartaJogador);
    this.deckDoJogardor.push(this.primeiraCartaRobo);
    this.cartasBatalhando()
    console.log("Jogador venceu");
    console.log(this.deckDoJogardor);
    console.log(this.deckDoRobo)
    this.verificaQtdCartas()
  }

  closeModal(){
    const jogarNovamenteButton = document.getElementById('jogar-novamente');

    if (jogarNovamenteButton) {
      jogarNovamenteButton.addEventListener('click', () => {
      const modal = document.querySelector('.modal') as HTMLElement;
      if (modal) {
        modal.style.display = 'none';
      }
    });
    }
  }

  verificaQtdCartas(){
    if(this.deckDoRobo.length == 0 || this.deckDoJogardor.length == 0){
      if(this.deckDoJogardor.length == 0 ) {
        alert("robo venceu");

        this.fimDeJogo = true;
      }else{
        this.fimDeJogo = true;
        alert("jogador venceu");
      }
    }
  }

  duelo(indicie:any){
    console.log(indicie)
      if((this.deckDoJogardor[0].indice == "S10" && this.deckDoRobo[0].indice.substr(0,1) == "A") || (this.deckDoRobo[0].indice == "S10" && this.deckDoJogardor[0].indice.substr(0,1) == "A")){
        if(this.deckDoJogardor[0].indice == "S10" && this.deckDoRobo[0].indice.substr(0,1) == "A"){
          this.roboVenceRodada();
        }else{
          this.jogadorVenceRodada();
        }
      }

      if(this.deckDoJogardor[0].atributos[indicie].valor > this.deckDoRobo[0].atributos[indicie].valor){
        this.jogadorVenceRodada();
      }else{
        this.roboVenceRodada();
      }
  }
}

