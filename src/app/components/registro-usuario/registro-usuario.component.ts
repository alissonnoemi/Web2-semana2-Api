import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { retry } from 'rxjs';
import { ProfesionPipe } from '../../pipes/profesion.pipe';
import { EdadPipe } from '../../pipes/edad.pipe';

@Component({
  selector: 'app-registro-usuario',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ProfesionPipe, EdadPipe],
  templateUrl: './registro-usuario.component.html',
  styleUrl: './registro-usuario.component.css',
})
export class RegistroUsuarioComponent {
  enviado: boolean = false;
  constructor(private fb:FormBuilder, private router: Router){}
  registroForm:FormGroup=this.fb.group({
    nombre:['', Validators.required], 
    profesion:['', [Validators.required]],
    fecha:['', [Validators.required]],
    correo:['', [Validators.required, Validators.email]],
    contrasenia:['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
  })
  registrar(){
    if(this.registroForm.valid){
      this.enviado=true;
      console.log('Registro Exitoso', this.registroForm.value);
    }else{
      this.registroForm.markAllAsTouched();
    }
  }
  camposSinLlenar=()=>{
    return !this.enviado && Object.values(this.registroForm).some(valor=>valor.trim?.()!=='')
  }
}
