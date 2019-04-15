import { Component, OnInit } from '@angular/core';
import { CalcService } from 'src/calc.service';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  op1: number;
  op2: number;
  resultado: number;

  constructor(private calcService: CalcService) { }

  ngOnInit() {
  }

  enviarDatos(operacion: string) {
    console.log(this.op1)
    console.log(this.op2)
    let observable = this.calcService.calcular(this.op1, this.op2, operacion);
    observable.subscribe(
      operacionHTTP => console.log(operacionHTTP)
      // operacionHTTP => this.resultado = operacionHTTP.resultado
    );
  }

}
