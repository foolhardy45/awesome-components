import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommentsComponent } from './components/comments/comments.component';
import { MaterialModule } from './material.module';



@NgModule({
  declarations: [
    CommentsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    CommentsComponent,
    MaterialModule,
  ]
})
export class SharedModule { }
