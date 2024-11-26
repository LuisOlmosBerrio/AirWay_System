import { Component, Input, OnInit } from '@angular/core';

type valueTyepe = 'number' | 'money';

@Component({
  selector: 'app-estadistic-card',
  templateUrl: './estadistic-card.component.html',
  styleUrls: ['./estadistic-card.component.scss'],
})
export class EstadisticCardComponent  implements OnInit {

  @Input({ required: true }) title: string = '';
  @Input({ required: true }) conte: string = '';
  @Input({ required: true }) type: valueTyepe = 'number';

  get contenido(): string {
    return this.type === 'money' ? `$${this.conte}`: this.conte;
  }

  constructor() { }

  ngOnInit() {}

}
