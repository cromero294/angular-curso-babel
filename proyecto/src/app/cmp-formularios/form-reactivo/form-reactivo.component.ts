import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-reactivo',
  templateUrl: './form-reactivo.component.html',
  styleUrls: ['./form-reactivo.component.css']
})
export class FormReactivoComponent implements OnInit {
  miForm: FormGroup;
  nombresStark = ['tony', 'arya', 'rickon', 'bran', 'sansa', 'robb'];

  constructor() { }

  ngOnInit() {
    this.miForm = new FormGroup({
      usuario: new FormControl('Mario', [Validators.required, this.esStark(this.nombresStark)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', Validators.required),
      skills: new FormArray([
        new FormControl('React', Validators.required),
        new FormControl('Angular', Validators.required)
      ])
    });
  }

  enviarDatos() {
    console.log(this.miForm);
  }

  addSkill(skill: string): void {
    (<FormArray>this.miForm.controls.skills).push(new FormControl(skill, Validators.required));
  }

  esStark(nombres: Array<string>) {
    return (formControl: FormControl) => {
      // const nombres = ['tony', 'arya', 'rickon', 'bran', 'sansa', 'robb'];
      if(nombres.includes(formControl.value.toLowerCase())) {
        return null;
      }
      return {esStark: "El valor no es Stark"};
    }
  }
}
