import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {

  public registerForm = this.fb.group({
    nombre: ['Kevin',[Validators.required, Validators.minLength(3)]],
    email: ['kevin@gmail.com',[Validators.required, Validators.minLength(3)]],
    password: ['kevino',[Validators.required, Validators.minLength(6)]],
    password2: ['kevino',[Validators.required, Validators.minLength(6)]],
    terminos: ['kevino',[Validators.required]],
  });

  constructor( private fb: FormBuilder ) { }



}
