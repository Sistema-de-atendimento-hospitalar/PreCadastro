import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/models/paciente.model';

@Component({
  selector: 'app-dados-confirmacao',
  templateUrl: './dados-confirmacao.component.html',
  styleUrls: ['./dados-confirmacao.component.scss']
})
export class DadosConfirmacaoComponent implements OnInit {

  private paciente:Paciente;


  constructor() { }

  ngOnInit(): void {
    let pacienteJsonConfirm = localStorage.getItem("paciente")

    if(pacienteJsonConfirm){
      this.paciente = JSON.parse(pacienteJsonConfirm);
    }
  }

}
