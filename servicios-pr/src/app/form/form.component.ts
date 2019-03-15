import { Component, OnInit } from '@angular/core';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private tareasService: TareasService) { }

  ngOnInit() {
  }

  guardar(inputTarea: HTMLInputElement): void{
    this.tareasService.addTarea(inputTarea.value);
    inputTarea.value = "";
  }

}
