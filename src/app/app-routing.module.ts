import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'admin-panel',
    loadChildren: () => import('./pages/admin-panel/admin-panel.module').then( m => m.AdminPanelPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login-admin',
    loadChildren: () => import('./pages/login-admin/login-admin.module').then( m => m.LoginAdminPageModule)
  },
  {
    path: 'ofertas',
    loadChildren: () => import('./pages/ofertas/ofertas.module').then( m => m.OfertasPageModule)
  },
  {
    path: 'detalle-oferts/:id',
    loadChildren: () => import('./pages/detalle-oferts/detalle-oferts.module').then(m => m.DetalleOfertsPageModule)
  },
  



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
