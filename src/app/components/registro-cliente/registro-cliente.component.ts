import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-registro-cliente',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro-cliente.component.html',
  styleUrl: './registro-cliente.component.css'
})
export class RegistroClienteComponent {
constructor(private clienteServio: ClientesService){}
nombre:string='';
direccion:string='';
email:string='';

agregarCliente(formulario:any){
  this.clienteServio.guardarClientes(formulario.value).subscribe(()=>{
    window.location.reload();
  })
}
}
