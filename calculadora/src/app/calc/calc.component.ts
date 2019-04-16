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
    let observable = this.calcService.calcular(this.op1, this.op2, operacion);
    observable.subscribe(
      operacionHTTP => this.resultado = operacionHTTP.resultado
    );
  }
}
