import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleadoAgenda.component.html',
  styleUrls: ['./crear-empleadoAgenda.component.css']
})

/**
 * exportamos la clase CrearEmpleadoComponent  esta clase tiene una particularidad
 * por que estamos creando y actualizando desde esta misma usando el mismo formulario
 * es una herramienta que nos brinda angular con los FormGroup
 * 
 * @author [Yeferson Valencia, alejandro.yandd@gmail.com.
 * @since [1.0.0]
 *
 */
export class CrearEmpleadoComponent implements OnInit {
  empleadoForm: FormGroup;
  titulo = 'Crear empleado';
  id: string | null;
  //en el constructor añadimos  ToastrService para el diseño de los mensajes cada que activamos un evento
  // private _empleadoService para accer a los metodos de las apis en Services
  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _empleadoService: EmpleadoService,
              private aRouter: ActivatedRoute) { 
    this.empleadoForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', Validators.required],
      tel: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    //metodo que inicia por defecto 
    this.esEditar();
  }

  //metodo para agregar  un empleado y editarlo 
  agregarEmpleado() {

    const EMPLEADO: Empleado = {
      nombre: this.empleadoForm.get('producto')?.value,
      apellido: this.empleadoForm.get('apellido')?.value,
      email: this.empleadoForm.get('correo')?.value,
      tel: this.empleadoForm.get('tel')?.value,
    }

    if(this.id !== null){
      this._empleadoService.editarEmpleado(this.id, EMPLEADO).subscribe(data=>{
        this.toastr.info("El producto editado con exito","Producto actualizado");
        this.router.navigate(['/']);
      })
    }else{
      //agregar empleado
      console.log(EMPLEADO);
    this._empleadoService.guardarEmpleado(EMPLEADO).subscribe(data => {
      this.toastr.success('El producto fue registrado con exito!', 'Producto Registrado!');
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
      this.empleadoForm.reset();
    })
    }
  }
  
 //metodo para editar empleado
  esEditar() {

    if(this.id !== null) {
      this.titulo = 'Editar empleado';
      this._empleadoService.obtenerEmpleado(this.id).subscribe(data => {
        this.empleadoForm.setValue({
          producto: data.nombre,
          apellido: data.apellido,
          email: data.email,
          tel: data.tel,
        })
      })
    }
  }
}
