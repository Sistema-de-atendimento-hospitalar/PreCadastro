import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.scss']
})
export class DadosPessoaisComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  nextPage() {
    this.router.navigate(['/passo2']);
  }

}
