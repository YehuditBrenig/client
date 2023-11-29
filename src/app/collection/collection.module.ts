import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CollectionComponent } from './collection.component';



@NgModule({
  declarations: [CollectionComponent],
  imports: [
    CommonModule,
    ButtonModule
  ]
})
export class CollectionModule { }
