import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.scss']
})
export class EnderecoComponent implements OnInit {

  enderecos = [1];

  constructor() { }

  ngOnInit(): void {

  }

  addEndereco() {
    this.enderecos.push(1);
  }

}