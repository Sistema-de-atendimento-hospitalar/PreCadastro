import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dados-telefone',
  templateUrl: './dados-telefone.component.html',
  styleUrls: ['./dados-telefone.component.scss']
})
export class DadosTelefoneComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  nextPage() {
    // Realizar validação com o cpf
    this.router.navigate(['/passo1']);
  }

}
