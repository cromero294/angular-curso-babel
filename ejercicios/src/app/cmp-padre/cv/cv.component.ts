import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  @Input() nombre = '';
  @Input() apellidos = '';
  @Input() fecha;
  @Input() email = '';
  @Input() skills;

  constructor() { }

  ngOnInit() {
  }

}
