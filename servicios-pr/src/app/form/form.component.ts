import { Component, OnInit } from '@angular/core';
import { TareasService } from '../tareas.service';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  miForm: FormGroup;

  constructor(private tareasService: TareasService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.miForm = this.formBuilder.group({
      tarea: this.formBuilder.control('', Validators.required),
    });
  }

  guardar(): void{
    this.tareasService.addTarea(this.miForm.controls.tarea.value);
  }

}
