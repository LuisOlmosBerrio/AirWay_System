import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthCompaniPage } from './auth-compani.page';

const routes: Routes = [
  {
    path: '',
    component: AuthCompaniPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthCompaniPageRoutingModule {}
