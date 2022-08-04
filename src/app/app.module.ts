import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { MatdialogComponent } from './matdialog/matdialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { Dialog1Component } from './matdialog/dialog1/dialog1.component';
import { Dialog2Component } from './matdialog/dialog2/dialog2.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
// import { Dialog3Component } from './matdialog/dialog3/dialog3.component';
import { FormsModule } from '@angular/forms';
import { MatselectComponent } from './matselect/matselect.component';
import {MatSelectModule} from '@angular/material/select';
import { MattableComponent } from './mattable/mattable.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatpaginatorComponent } from './matpaginator/matpaginator.component';
import { MatTabsComponent } from './mat-tabs/mat-tabs.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MatdatepickerComponent } from './matdatepicker/matdatepicker.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    
    MatdialogComponent,
    Dialog1Component,
    Dialog2Component,
    MatselectComponent,
    MattableComponent,
    MatpaginatorComponent,
    MatTabsComponent,
    MatdatepickerComponent,
   
  

    // Dialog3Component,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
