import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [FormsModule, ReactiveFormsModule, HttpClientModule, CommonModule],
  exports: [FormsModule, ReactiveFormsModule, HttpClientModule, CommonModule]
})
export class SharedModule {}
