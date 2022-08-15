import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material/dialog'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedService } from './shared.service';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonnelComponent } from './personnel/personnel.component';
import { ProformaComponent } from './proforma/proforma.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { EditpersComponent } from './personnel/editpers/editpers.component';
import { RemarksComponent } from './personnel/remarks/remarks.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonnelComponent,
    ProformaComponent,
    EditpersComponent,
    RemarksComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [SharedService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
