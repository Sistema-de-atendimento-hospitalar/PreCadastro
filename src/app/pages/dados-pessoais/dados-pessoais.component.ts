import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from 'src/models/paciente.model';

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.scss']
})
export class DadosPessoaisComponent implements OnInit {

  private paciente:Paciente;
  private dominio: string = null;
  private disableDominio: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.paciente = new Paciente();
  }

  nextPage() {
    this.validarCampos(this.paciente);

    let emailPaciente = this.paciente.email;
    if(!emailPaciente.includes("@")) {
      this.paciente.email = `${this.paciente.email}${this.dominio}`;
    }

    console.log(this.paciente.email);

    this.router.navigate(['/passo2']);
  }
  
  validateEmail(){
    let emailPaciente = this.paciente.email;
    if(emailPaciente.includes("@")) {
      this.disableDominio = true;
    } else {
      this.disableDominio = false;
    }
  }

  validarCampos(paciente: Paciente) {
    return true;
  }

}

