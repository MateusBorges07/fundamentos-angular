import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponenteComponent } from './primeiro-componente/primeiro-componente.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { MultiplicaPorPipe } from './multiplica-por.pipe';
import { PipeCustomizadoComponent } from './pipe-customizado/pipe-customizado.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
import { RendezindoListasComponent } from './rendezindo-listas/rendezindo-listas.component';
import { ComponentesPersonalizadosComponent } from './componentes-personalizados/componentes-personalizados.component';
import { ComponentePaiComponent } from './componente-pai/componente-pai.component';
import { ComponenteFilhoComponent } from './componente-filho/componente-filho.component';
import { ExemplosServicos1Component } from './exemplos-servicos1/exemplos-servicos1.component';
import { ExemplosServicos2Component } from './exemplos-servicos2/exemplos-servicos2.component';
import { ClicoDeVidaComponent } from './clico-de-vida/clico-de-vida.component';
import { CicliDeVidaPaiComponent } from './cicli-de-vida-pai/cicli-de-vida-pai.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    SegundoComponenteComponent,
    MultiplicaPorPipe,
    PipeCustomizadoComponent,
    TwoWayDataBindingComponent,
    RendezindoListasComponent,
    ComponentesPersonalizadosComponent,
    ComponentePaiComponent,
    ComponenteFilhoComponent,
    ExemplosServicos1Component,
    ExemplosServicos2Component,
    ClicoDeVidaComponent,
    CicliDeVidaPaiComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
