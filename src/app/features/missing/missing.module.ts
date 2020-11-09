import { NgModule } from '@angular/core';

import { MissingRoutingModule } from './missing-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [RegisterComponent],
  imports: [SharedModule, MissingRoutingModule]
})
export class MissingModule {}
