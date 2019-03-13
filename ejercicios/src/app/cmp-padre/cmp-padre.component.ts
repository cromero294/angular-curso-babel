import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cmp-padre',
  templateUrl: './cmp-padre.component.html',
  styleUrls: ['./cmp-padre.component.css']
})
export class CmpPadreComponent implements OnInit {

  @Input() nombre = '';
  @Input() apellidos = '';
  @Input() fecha;
  @Input() email = '';
  @Input() skills;

  constructor() { }

  ngOnInit() {
  }

}
