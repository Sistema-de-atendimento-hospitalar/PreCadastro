import { Component, OnInit } from '@angular/core';
import { CepService } from '../../../../service/cep/cep.service';
import { EnderecoCorreios } from '../../../../../models/enderecoCorreios.model';
import {MatDialog} from '@angular/material/dialog';
import { ModalEnderecoComponent } from 'src/app/shared/modal/modal-endereco/modal-endereco.component';

@Component({
  selector: 'form-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.scss']
})
export class EnderecoComponent implements OnInit {

  enderecos = [1];

  private enderecoCorreios: EnderecoCorreios;
  private disableInput: boolean = false;

  constructor(private cepService: CepService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.enderecoCorreios = new EnderecoCorreios();
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalEnderecoComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  // addEndereco() {
  //   this.enderecos.push(1);
  // }

  verifyCep() {
    let cepRequest = this.enderecoCorreios;
    let cepLength: number = 8;
    if (cepRequest.cep.length == cepLength) {
      this.cepService.searchCep(cepRequest.cep).subscribe(result => {
        this.enderecoCorreios = result
        // if(result){
        //   this.disableInput = true;
        // } else{
        //   this.disableInput = false;
        // }
        
      });
      localStorage.setItem("endereco", JSON.stringify(this.enderecoCorreios))
    }
  } 


}