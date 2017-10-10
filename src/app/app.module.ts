import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { FmlaComponent } from './fmla/fmla.component';
import { AdaComponent } from './ada/ada.component';
import { WorkersCompComponent } from './workers-comp/workers-comp.component';
import { AdminEmployeeInfoComponent } from './admin/admin-employee-info/admin-employee-info.component';
import { PrintComponent } from './print/print.component';


@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    EmployeeInfoComponent,
    FmlaComponent,
    AdaComponent,
    WorkersCompComponent,
    AdminEmployeeInfoComponent,
    PrintComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'employee-info', component: EmployeeInfoComponent },
      { path: 'fmla', component: FmlaComponent },
      { path: 'ada', component: AdaComponent },
      { path: 'workers-comp', component: WorkersCompComponent },
      { path: 'admin/admin-employee-infor', component: AdminEmployeeInfoComponent },
      { path: 'app-print', component: PrintComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
