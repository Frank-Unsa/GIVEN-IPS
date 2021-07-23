import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { pathToFileURL } from 'url';
import { LayoutComponent } from "./layout/layout.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children:[
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full',
      },
      {
        path: 'inicio',
        loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule)
      },
      {
        path: 'busqueda',
        loadChildren: () => import('./busqueda/busqueda.module').then(m => m.BusquedaModule)
      },
      {
        path: 'foro',
        loadChildren: () => import('./foro/foro.module').then(m => m.ForoModule)
      },
      {
        path: 'ubicalos',
        loadChildren: () => import('./mapa/mapa.module').then(m => m.MapaModule)
      },
      {
        path: 'graficos',
        loadChildren: () => import('./graficos/graficos.module').then(m => m.GraficosModule)
      },
      {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
      },

      /* Crear ruta para preguntas frecuentes */
    ]
  },
  {
    path: '**',
    loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
