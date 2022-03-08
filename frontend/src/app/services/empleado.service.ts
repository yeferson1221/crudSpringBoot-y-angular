import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})

/**
 * exportamos la clase EmpleadoService donde consumimos las apis de Springboot  *
 * 
 * @author [Yeferson Valencia, alejandro.yandd@gmail.com.
 * @since [1.0.0]
 *
 */
export class EmpleadoService {
  //guardodo la api en uva variable URL para usarala  en cada metodo
    url= 'http://localhost:8080/api/v1/empleados/';
  constructor(private http: HttpClient) { }
//optengo todos las agendas de empleado
  getEmpleados(): Observable<any> {
    return this.http.get(this.url);
  }
//eliminar  agenda  empleado
  eliminarEmpleado(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
//guardar agenda empleado
  guardarEmpleado(empleado: Empleado): Observable<any> {
    return this.http.post(this.url, empleado);
  }
//optener  o buscar empleado por id
  obtenerEmpleado(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }
//aditar agenda empleado
  editarEmpleado(id:string,empleado:Empleado) : Observable<Object>{
    return this.http.put(`${this.url}/${id}`,empleado);
  }
  
}
