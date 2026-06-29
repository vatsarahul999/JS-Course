import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { UserFormComponent } from './components/user-form/user-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ActionCellComponent } from './components/action-cell/action-cell.component';
//import { AgGridModule } from 'ag-grid-angular/lib/ag-grid-angular.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserFormComponent,
    NavbarComponent,
    SidebarComponent,
    ActionCellComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgGridModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
