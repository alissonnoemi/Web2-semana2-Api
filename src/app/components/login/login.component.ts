import { Component } from '@angular/core';
import { AutenticacionService } from '../../services/autenticacion.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario:string='';
  password:string='';
  error: string = '';
  constructor(private authServicio: AutenticacionService, private router: Router){
  }
  login=()=>{
     const sesionExitosa = this.authServicio.validarUsuario(this.usuario, this.password);
    if(sesionExitosa){
      const redireccion = localStorage.getItem('redirectUrl') || '/empleados';
      localStorage.removeItem('redirectUrl');
      this.router.navigateByUrl(redireccion);
    }else{
      this.error="usuario y contraseña incorrecta";
    }
  }
}
