import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearEmpleadoComponent } from './components/crear-agenda/crear-empleadoAgenda.component';

// componentes
import { ListarEmpleadosComponent } from './components/listar-agenda/listar-empleadosAgenda.component';

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
