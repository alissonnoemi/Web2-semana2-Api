import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AutenticacionService } from '../../services/autenticacion.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private authServicio: AutenticacionService, private router: Router) {}
  logout() {
    const redireccion = localStorage.getItem('redirectUrl') || '/home';
    localStorage.removeItem('redirecUrl');
    this.authServicio.logout();
     this.router.navigateByUrl(redireccion);
  }
}
