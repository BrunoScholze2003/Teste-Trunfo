import { Component, Input } from '@angular/core';
import { cardInterface } from './interfaces/card-interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
	@Input()
	public carta!: any;

  public loading = true;
  public atributoSelecionado!: number;

  constructor() {}

  selecionarAtributo(index: number): void {
    this.atributoSelecionado = index;
  }
}