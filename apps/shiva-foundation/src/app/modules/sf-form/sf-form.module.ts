import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SfFormsComponent } from './sf-forms/sf-forms.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SfFormsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    SfFormsComponent
  ]
})

export class SfFormModule { }
