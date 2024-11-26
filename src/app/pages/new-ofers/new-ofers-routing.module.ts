import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewOfersPage } from './new-ofers.page';

const routes: Routes = [
  {
    path: '',
    component: NewOfersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewOfersPageRoutingModule {}
