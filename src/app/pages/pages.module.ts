import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
// import { NgCpfModule } from 'ngcpf';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { TabsModule } from "ngx-bootstrap/tabs";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { AlertModule } from "ngx-bootstrap/alert";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { ModalModule } from "ngx-bootstrap/modal";
import { JwBootstrapSwitchNg2Module } from "jw-bootstrap-switch-ng2";
import { PopoverModule } from "ngx-bootstrap/popover";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';






import { IndexComponent } from "./index/index.component";
// import { ProfilepageComponent } from "./profilepage/profilepage.component";
// import { RegisterpageComponent } from "./registerpage/registerpage.component";
// import { LandingpageComponent } from "./landingpage/landingpage.component";
// import { LoginComponent } from './login/login.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { HeaderComponent } from '../shared/header/header.component';
import { SquareComponent } from '../shared/square/square.component';
import { SquarePreCadastroComponent } from '../shared/square/square-pre-cadastro/square-pre-cadastro.component'
import { InputEstadoComponent } from '../shared/forms/input/input-estado/input-estado.component';
import { InputCidadeComponent } from '../shared/forms/input/input-cidade/input-cidade.component';
import { EnderecoComponent } from '../shared/forms/input/endereco/endereco.component';
import { TelefoneComponent } from '../shared/forms/input/telefone/telefone.component';


import { DadosPessoaisComponent } from './dados-pessoais/dados-pessoais.component';
import { DadosEnderecoComponent } from './dados-endereco/dados-endereco.component';
import { DadosTelefoneComponent } from './dados-telefone/dados-telefone.component';
import { DadosConvenioComponent } from './dados-convenio/dados-convenio.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  imports: [
    // NgCpfModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    PopoverModule.forRoot(),
    CollapseModule.forRoot(),
    JwBootstrapSwitchNg2Module,
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    NgxMaskModule.forRoot()
  ],
  declarations: [
    IndexComponent,
    // ProfilepageComponent,
    // RegisterpageComponent,
    // LandingpageComponent,
    // LoginComponent,
    FooterComponent,
    HeaderComponent,
    SquareComponent,
    SquarePreCadastroComponent,
    InputEstadoComponent,
    InputCidadeComponent,
    EnderecoComponent,
    TelefoneComponent,

    DadosPessoaisComponent,
    DadosEnderecoComponent,
    DadosTelefoneComponent,
    DadosConvenioComponent,
  ],
  exports: [
    IndexComponent,
    // ProfilepageComponent,
    // RegisterpageComponent,
    // LandingpageComponent
  ],
  providers: []
})
export class PagesModule {}
