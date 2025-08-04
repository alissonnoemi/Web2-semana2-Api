import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ActualizarClientesComponent } from './components/actualizar-clientes/actualizar-clientes.component';
import { autenticaGuard } from './guards/autentica.guard';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path:'', redirectTo:'/home', pathMatch:'full'},
    {path:'empleados', component: EmpleadosComponent, canActivate:[autenticaGuard]},
    {path:'clientes', component: ClientesComponent},
    {path:'clientes/:id', component:ActualizarClientesComponent},
    {path:'login', component:LoginComponent}
];
