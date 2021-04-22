import { Component, Input, OnInit } from '@angular/core';

interface Estado {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'input-estado',
  templateUrl: './input-estado.component.html',
  styleUrls: ['./input-estado.component.scss']
})
export class InputEstadoComponent implements OnInit {

  estados: Estado[] = [
    { value: "AC", viewValue: "Acre" },
    { value: "AL", viewValue: "Alagoas" },
    { value: "AP", viewValue: "Amapá" },
    { value: "AM", viewValue: "Amazonas" },
    { value: "BA", viewValue: "Bahia" },
    { value: "SP", viewValue: "São Paulo" }
  ]

  @Input() estado: string;

  constructor() { }

  ngOnInit(): void {
    console.log(`estado ${this.estado}`)
  }

}
