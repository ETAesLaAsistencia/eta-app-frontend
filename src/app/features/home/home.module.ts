import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import {HelpMeComponent} from './components/helpme/helpme.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HomeComponent, HelpMeComponent],
  imports: [SharedModule, HomeRoutingModule, CommonModule]
})
export class HomeModule {}
