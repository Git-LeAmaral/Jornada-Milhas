import { Component } from '@angular/core';

@Component({
  selector: 'app-depositions',
  templateUrl: './depositions.component.html',
  styleUrls: ['./depositions.component.scss']
})
export class DepositionsComponent {
  depoimento: string = `Recomendo fortemente a agência de viagens Jornada.
  Eles oferecem um serviço personalizado e de alta qualidade
  que excedeu minhas expectativas em minha última viagem.`

  autoria: string = 'Mariana Faustino'
}
