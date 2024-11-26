import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleOfertsPage } from './detalle-oferts.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleOfertsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleOfertsPageRoutingModule {}
