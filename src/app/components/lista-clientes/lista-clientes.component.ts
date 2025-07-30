import { Component } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-lista-clientes',
  standalone: true,
  imports: [],
  templateUrl: './lista-clientes.component.html',
  styleUrl: './lista-clientes.component.css'
})
export class ListaClientesComponent {
  constructor(private clienteServicio: ClientesService){
  }
  clientes: any[]=[];
   ngOnInit(){
    this.clienteServicio.getClientes().subscribe(data=>{
      this.clientes=Object.values(data);
    })
   }
  
}
