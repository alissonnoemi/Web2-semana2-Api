import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ActualizarClientesComponent } from './components/actualizar-clientes/actualizar-clientes.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path:'', redirectTo:'/home', pathMatch:'full'},
    {path:'empleados', component: EmpleadosComponent},
    {path:'clientes', component: ClientesComponent},
    {path:'clientes/:id', component:ActualizarClientesComponent}
];
