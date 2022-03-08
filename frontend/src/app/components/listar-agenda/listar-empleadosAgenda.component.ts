import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';


@Component({
  selector: 'app-listar-empledos',
  templateUrl: './listar-empleadosAgenda.component.html',
  styleUrls: ['./listar-empleadosAgenda.component.css']
})
export class ListarEmpleadosComponent implements OnInit {
  listEmpleados: Empleado[] = [];
  
  constructor(private _empleadoService: EmpleadoService,
        private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerEmpleados();
  }


  obtenerEmpleados() {
    this._empleadoService.getEmpleados().subscribe(data => {
      console.log(data);
      this.listEmpleados = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarEmpleado(id: any) {
    this._empleadoService.eliminarEmpleado(id).subscribe(data => {
      this.toastr.error('El producto fue eliminado con exito' ,'Producto Eliminado');
      this.obtenerEmpleados();
    }, error => {
      console.log(error);
    })
  }

}
