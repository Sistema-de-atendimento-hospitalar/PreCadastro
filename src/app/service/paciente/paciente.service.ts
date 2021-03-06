import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from '../../../models/paciente.model'
import { Endereco } from 'src/models/endereco.model';
import { Telefone } from 'src/models/telefone.model';
import { CartaoSaude } from 'src/models/convenio.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*',
   }
  )
};

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private API_URL: string = "http://localhost:8080/v1/paciente";

  constructor(private http: HttpClient) { }

  verifyPacienteFromCpf(cpf: string): Observable<Paciente> {
    return this.http.get<Paciente>(`${this.API_URL}/cpf/${cpf}`, httpOptions).pipe();
  }

  savePaciente(paciente:Paciente):Observable<Paciente>{
    return this.http.post<Paciente>(`${this.API_URL}`, paciente).pipe();
  }

  saveEndereco(endereco:Endereco, paciente:Paciente):Observable<Paciente>{
    return this.http.post<Paciente>(`${this.API_URL}/${paciente.idPaciente}/endereco`, endereco).pipe();
  }

  saveTelefone(telefone:Telefone, paciente:Paciente):Observable<Paciente>{
    return this.http.post<Paciente>(`${this.API_URL}/${paciente.idPaciente}/telefone`, telefone).pipe();
  }

  saveCartaoSaude(cartaoSaude:CartaoSaude, paciente:Paciente):Observable<Paciente>{
    return this.http.post<Paciente>(`${this.API_URL}/${paciente.idPaciente}/cartaoSaude`, cartaoSaude).pipe();
  }


}
