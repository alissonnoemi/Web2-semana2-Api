import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http:HttpClient) { }
  private API_CLIENTES='https://app-fire-724c1-default-rtdb.firebaseio.com/'
  guardarClientes(cliente:any):Observable<any>{
    return this.http.post(`${this.API_CLIENTES}/clientes.json`, cliente)
  }
  getClientes():Observable<any>{
    return this.http.get<any>(`${this.API_CLIENTES}/clientes.json`);

  }
  
  buscarClienteById(id: string): Observable<any> {
    return this.http.get(`${this.API_CLIENTES}/clientes/${id}.json`);
  }

  eliminarCliente(id: string): Observable<any> {
    return this.http.delete(`${this.API_CLIENTES}/clientes/${id}.json`);
  }
  editarCliente(id: string, cliente: any): Observable<any> {
    return this.http.put(`${this.API_CLIENTES}/clientes/${id}.json`, cliente);
  }
}
