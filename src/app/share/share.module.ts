import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule, MatInputModule
} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule
  ]
})
export class ShareModule {
}
