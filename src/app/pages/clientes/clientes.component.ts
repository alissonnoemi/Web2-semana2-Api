import { Component } from '@angular/core';
import { RegistroClienteComponent } from "../../components/registro-cliente/registro-cliente.component";
import { ListaClientesComponent } from "../../components/lista-clientes/lista-clientes.component";

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [RegistroClienteComponent, ListaClientesComponent],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {

}
