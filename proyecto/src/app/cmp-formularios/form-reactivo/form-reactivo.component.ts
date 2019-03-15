import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-reactivo',
  templateUrl: './form-reactivo.component.html',
  styleUrls: ['./form-reactivo.component.css']
})
export class FormReactivoComponent implements OnInit {
  miForm: FormGroup;
  nombresStark = ['tony', 'arya', 'rickon', 'bran', 'sansa', 'robb'];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.miForm = this.formBuilder.group({
      usuario: this.formBuilder.control('Mario', [Validators.required, this.esStark(this.nombresStark)]),
      password: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control('', Validators.required),
      skills: this.formBuilder.array([
        this.formBuilder.control('React', Validators.required),
        this.formBuilder.control('Angular', Validators.required)
      ])
    });
  }

  enviarDatos() {
    console.log(this.miForm);
  }

  addSkill(skill: string): void {
    (<FormArray>this.miForm.controls.skills).push(this.formBuilder.control(skill, Validators.required));
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
