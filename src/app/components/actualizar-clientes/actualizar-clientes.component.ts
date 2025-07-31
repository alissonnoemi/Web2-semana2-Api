import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClientesService } from '../../services/clientes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-clientes',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './actualizar-clientes.component.html',
  styleUrl: './actualizar-clientes.component.css'
})
export class ActualizarClientesComponent {
constructor(private servicioCliente: ClientesService,  private router: Router, private ruta: ActivatedRoute){
  
}
id:string='';
cliente:any={nombre:'', direccion:'', email:''}
ngOnInit():void{
    this.ruta.params.subscribe(params =>{
      this.id=params['id']
      this.servicioCliente.buscarClienteById(this.id).subscribe(cliente =>{
        this.cliente=cliente;
      })
    })
  }
  editar(formulario:any):void{
    const clienteActualizado={...formulario.value, id: this.id};
    this.servicioCliente.editarCliente(this.id, clienteActualizado).subscribe(()=>{
      this.router.navigate(['/clientes']);
    })
  }
}
