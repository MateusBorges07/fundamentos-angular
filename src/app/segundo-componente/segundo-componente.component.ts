import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
    nome = "Mateus";
    dataNascimento = "2000-03-07";
    urlImagem = "/assets/vetor.jpg";

    mostrarDataNascimento (){
      alert("A data de nascimento do mateus é: ${this.dataNascimento}");
    }
}
