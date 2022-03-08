import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


/* componentes creados para listar y crear  como nota adicional en el
el componente CrearEmpleadoComponent  esta tambien para editar  aprovechando
las herramientas que angular nos facilita ngfor,nglist y formularios
*/ 
import { CrearEmpleadoComponent } from './components/crear-agenda/crear-empleadoAgenda.component';
import { ListarEmpleadosComponent } from './components/listar-agenda/listar-empleadosAgenda.component';
//rutas 
const routes: Routes = [
  { path: '', component: ListarEmpleadosComponent },
  { path: 'crear-empleado', component: CrearEmpleadoComponent },
  { path: 'editar-empleado/:id', component: CrearEmpleadoComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
