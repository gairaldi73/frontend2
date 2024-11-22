import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReunionListComponent } from './reunion-list/reunion-list.component';
import { ReunionDetailComponent } from './reunion-detail/reunion-detail.component';
import { LoginComponent } from './login/login.component';
import { reunionGuard } from './reunion.guard';
import { reunionResolver } from './reunion.resolver';

const routes: Routes = [
  //login
    {path: 'login',
    component: LoginComponent},
    // listado/detalle
    {path: 'listado',
    component: ReunionListComponent,
    children: [{ 
      path: 'detalle/:id',
      component: ReunionDetailComponent,
      data: {titulo: 'Detalle'},
      canActivate: [reunionGuard],
      resolve: {
        reunion: reunionResolver,
              }
       }],
  },
  //cualquier cosa
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
  //espacio en blanco
  {path: '', redirectTo: '/login', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
