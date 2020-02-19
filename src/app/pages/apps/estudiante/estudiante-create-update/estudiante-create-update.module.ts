import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudianteCreateUpdateComponent } from './estudiante-create-update.component';
//
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatMenuModule } from "@angular/material/menu";
import { IconModule } from "@visurel/iconify-angular";
import { MatDividerModule } from "@angular/material/divider";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import { DatePipe } from "@angular/common";

@NgModule({
  declarations: [EstudianteCreateUpdateComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatSelectModule,
    MatMenuModule,
    IconModule,
    MatDividerModule
  ],
  entryComponents: [EstudianteCreateUpdateComponent],
  exports: [EstudianteCreateUpdateComponent],
  providers:[DatePipe]
})
export class EstudianteCreateUpdateModule { }
