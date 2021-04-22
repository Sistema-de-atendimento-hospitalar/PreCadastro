import { Component, OnInit } from '@angular/core';
import { CepService } from '../../../../service/cep/cep.service';
import { EnderecoCorreios } from '../../../../../models/enderecoCorreios.model';
@Component({
  selector: 'form-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.scss']
})
export class EnderecoComponent implements OnInit {

  enderecos = [1];

  private enderecoCorreios: EnderecoCorreios;

  constructor(private cepService: CepService) { }

  ngOnInit(): void {
    this.enderecoCorreios = new EnderecoCorreios();
  }

  addEndereco() {
    this.enderecos.push(1);
  }

  verifyCep() {
    let cepRequest = this.enderecoCorreios;
    let cepLength: number = 8;
    if (cepRequest.cep.length == cepLength) {
      this.cepService.searchCep(cepRequest.cep).subscribe(result => {
        this.enderecoCorreios = result
      });
      localStorage.setItem("endereco", JSON.stringify(this.enderecoCorreios))
    }
  }

}