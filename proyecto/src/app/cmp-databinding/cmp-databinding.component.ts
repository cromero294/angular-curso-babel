import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-databinding',
  templateUrl: './cmp-databinding.component.html',
  styleUrls: ['./cmp-databinding.component.css']
})
export class CmpDatabindingComponent implements OnInit {

  // miNombre: string | number = "Mario";
  // miNombre: string = "Mario";
  miNombre = "Mario";
  modoEditar = false;
  ph = "Placeholder";

  constructor() { 
    // this.miNombre = 5;
  }

  ngOnInit() {
  }

  cambiarModoEditar(num: number): void {
    this.modoEditar = !this.modoEditar;
  }
}
