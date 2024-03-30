import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StringLenghtPipe } from './Pipes/string-lenght.pipe';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    StringLenghtPipe,
  ],
  imports: [
    CommonModule,
    RouterLink,
  ],
  exports: [
    CommonModule,
    StringLenghtPipe,
    RouterLink,
  ]
})
export class UsersModule { }
