import { NgModule } from '@angular/core';

import { LoginAdminPageRoutingModule } from './login-admin-routing.module';

import { LoginAdminPage } from './login-admin.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [SharedModule, LoginAdminPageRoutingModule],
  declarations: [LoginAdminPage]
})
export class LoginAdminPageModule {}
