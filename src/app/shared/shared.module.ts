import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';
import { EditWindowComponent } from './edit-window/edit-window.component';


@NgModule({
  declarations: [
    ConfirmDeleteComponent,
    EditWindowComponent,
  ],
  imports: [
    HttpClientModule,

    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    ConfirmDeleteComponent,
    EditWindowComponent,
  ],
  exports: [
    HttpClientModule,

    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
