import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-clico-de-vida',
  templateUrl: './clico-de-vida.component.html',
  styleUrls: ['./clico-de-vida.component.css']
})
export class ClicoDeVidaComponent implements OnInit, OnChanges, OnDestroy{

  horario = new Date();
  timer: any = null!;
  @Input() texto = "";

  ngOnInit(): void{
    console.log("o evento onInit disparou");
    this.timer = setInterval(()=> this.horario = new Date(), 1000);

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
ngOnDestroy(): void {
  clearInterval(this.timer);
}

}
