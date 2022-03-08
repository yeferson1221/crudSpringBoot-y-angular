import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';


@Component({
  selector: 'app-listar-empledos',
  templateUrl: './listar-empleadosAgenda.component.html',
  styleUrls: ['./listar-empleadosAgenda.component.css']
})

/**
 * exportamos la clase ListarEmpleadosComponent tenemos los metodos para optener empleados
 * y elimiar empleados  *
 * 
 * @author [Yeferson Valencia, alejandro.yandd@gmail.com.
 * @since [1.0.0]
 *
 */
export class ListarEmpleadosComponent implements OnInit {
  //creao un array list de empleado
  listEmpleados: Empleado[] = [];
  
  /*//constructor  para el  ToastrService libreria para los mensajes con diseños y colores
       private _empleadoService fonde almacenos el metodo de la api y trabajo con el  

  */
  constructor(private _empleadoService: EmpleadoService,
        private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

//metodo optener agenda empleado
  obtenerEmpleados() {
    this._empleadoService.getEmpleados().subscribe(data => {
      console.log(data);
      this.listEmpleados = data;
    }, error => {
      console.log(error);
    })
  }
//eliminar agenda empleado
  eliminarEmpleado(id: any) {
    this._empleadoService.eliminarEmpleado(id).subscribe(data => {
      this.toastr.error('El producto fue eliminado con exito' ,'Producto Eliminado');
      this.obtenerEmpleados();
    }, error => {
      console.log(error);
    })
  }

}
