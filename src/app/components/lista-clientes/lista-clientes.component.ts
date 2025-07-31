import { Component } from '@angular/core';
import { ClientesService } from '../../services/clientes.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-clientes',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './lista-clientes.component.html',
  styleUrl: './lista-clientes.component.css'
})
export class ListaClientesComponent {
  constructor(private clienteServicio: ClientesService){
  }
  clientes: any[]=[];
   ngOnInit():void{
    this.clienteServicio.getClientes().subscribe(data=>{
      this.clientes=Object.keys(data).map(key=>({
        id:key, ...data[key]
      }));
    });
  }
   eliminar(id: string): void {
    this.clienteServicio.eliminarCliente(id).subscribe({
      next: () => {
        this.clientes = this.clientes.filter(cliente => cliente.id !== id);
      },
      error: (error: any) => {
        console.log("Error al eliminar cliente", error);
      }
    });
   }
  
}
