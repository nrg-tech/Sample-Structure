import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from'@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';
import { RouterModule, Routes } from "@angular/router";
import { CustomMaterialModule } from "./core/material.module";

import { LoginComponent } from './login/login.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SalesModule } from './sales/sales.module';
import { EmployeeModule } from './employee/employee.module';
import { VendorcustomerModule } from './vendorcustomer/vendorcustomer.module';
import { CategoryproductModule } from './categoryproduct/categoryproduct.module';
import { PurchaseModule } from './purchase/purchase.module';
import { FinanceModule } from './finance/finance.module';
import { StockModule } from './stock/stock.module'; 
import { UsermgtModule } from './usermgt/usermgt.module';
import { ReportModule } from './report/report.module';
//import { AlertComponent } from './_directives/index';
import { AlertService, AuthenticationService,UserService } from './_services/index';


const appRoutes: Routes = [
  //{ path: '', component: FirstComponent, data: { title: 'First Component' } },
  { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard Component' } },
  { path: 'login', component: LoginComponent, data: { title: 'Login Component' }},
  { path: 'landingpage', component: LandingpageComponent, data: { title: 'Landing Component' },
    children: [
      { path: '', loadChildren: () => EmployeeModule },
      { path: '', loadChildren: () => VendorcustomerModule },
      { path: '', loadChildren: () => CategoryproductModule },
      { path: '', loadChildren: () => PurchaseModule },
      { path: '', loadChildren: () => SalesModule },
      { path: '', loadChildren: () => FinanceModule },
      { path: '', loadChildren: () => StockModule },
      { path: '', loadChildren: () => ReportModule },
      { path: '', loadChildren: () => UsermgtModule }
    ],
  },

  { path: '**', redirectTo: 'login' }
];
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SecondComponent,
    FirstComponent,
    LoginComponent,
    LandingpageComponent,   
    DashboardComponent,
   // AlertComponent
  ],

  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: true , onSameUrlNavigation: 'reload'} // <-- debugging purposes only
    ),
    CustomMaterialModule,
    EmployeeModule,
    VendorcustomerModule,
    CategoryproductModule,
    PurchaseModule,
    SalesModule,
    FinanceModule,
    StockModule,
    ReportModule,
    UsermgtModule
  ],
  providers: [AlertService,AuthenticationService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
