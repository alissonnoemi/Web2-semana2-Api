import { Component } from '@angular/core';
import { EmpleadosService } from '../../services/empleados.service';
import { Empleado } from '../../interface/empleado';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent {
  constructor(private servicioEmpleado:EmpleadosService){}
  empleados:Empleado[]=[];
  ngOnInit(){
    this.servicioEmpleado.getEmpleados().subscribe(data=>{
      this.empleados=data.items;
    })
  }
}
