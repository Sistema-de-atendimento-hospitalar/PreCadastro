import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from 'src/models/paciente.model';
import { PacienteService} from 'src/app/service/paciente/paciente.service';
@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.scss']
})
export class DadosPessoaisComponent implements OnInit {

  private paciente:Paciente;
  private dominio: string = null;
  private disableDominio: boolean = false;

  constructor(private router: Router,  private pacienteService:PacienteService) {}

  ngOnInit(): void {
    this.paciente = this.pacienteService.getPacienteFromLocalStore();

  }

  nextPage() {
    this.validarCampos(this.paciente);
    let emailPaciente = this.paciente.email;
    if(!emailPaciente.includes("@")) {
      this.paciente.email = `${this.paciente.email}${this.dominio}`;
    }
    console.log(this.paciente);

    this.pacienteService.savePaciente(this.paciente).subscribe(result => {
          localStorage.setItem("paciente",JSON.stringify(this.paciente));
          this.paciente = result;
          if(result){
            this.router.navigate(['/passo2']);
          }
        })

    
  }
  
  validateEmail(){
    let emailPaciente = this.paciente.email;
    if(emailPaciente.includes("@")) {
      this.disableDominio = true;
    } else {
      this.disableDominio = false;
    }
  }

  validarCampos(paciente: Paciente):boolean {
   let validateNome = this.paciente.nome;
   if(validateNome == null){
     return false;
   }
    return true;
  }



}

