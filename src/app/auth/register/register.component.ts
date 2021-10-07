import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {

  public formSubmit = false;

  public registerForm = this.fb.group({
    nombre: ['',[Validators.required, Validators.minLength(3)]],
    email: ['',[Validators.required, Validators.minLength(3),Validators.email]],
    password: ['',[Validators.required, Validators.minLength(6)]],
    password2: ['',[Validators.required, Validators.minLength(6)]],
    terminos: ['false',Validators.required],
  },{
    validators: this.passwordsIguales('password','password2')
  });

  constructor( private fb: FormBuilder,
     private usuarioService:UsuarioService) { }


  crearUsuario(){
    this.formSubmit = true;
    console.log(this.registerForm.value);
    if(this.registerForm.invalid){
      return;
    }

    //todo:crear
    this.usuarioService.crearUsuario(this.registerForm.value)
    .subscribe(resp => {
      console.log('usuario creado');
      console.log(resp);
      
    },(err)=> {
      Swal.fire('Error',err.error.sms,'error')
    })
  }

  campoNoValido(campo:string):boolean{
    if(this.registerForm.get(campo)?.invalid && this.formSubmit){
      return true
    }else{
      return false
    }
  }

  aceptaTerminos(){
    return !this.registerForm.get('terminos')?.value && this.formSubmit;
  }


  contrasenasNoValidas(){
    const pass1 = this.registerForm.get('password')?.value
    const pass2 = this.registerForm.get('password2')?.value
    
    if((pass1 !== pass2) && this.formSubmit){
      return true
    }else{
      return false
    }
  }

  passwordsIguales(pass1:string,pass2:string){
    return (formGroup:FormGroup) =>{
      const pass1Control = formGroup.get(pass1);
      const pass2Control = formGroup.get(pass2);

      if(pass1Control?.value === pass2Control?.value){
        pass2Control?.setErrors(null)
      }else{
        pass2Control?.setErrors({noEsIgual:true})
      }
    }
  }


}
