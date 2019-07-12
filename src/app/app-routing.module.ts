import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeComponent} from './employee/employee.component';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {EmployeeSearchComponent} from './employee-search/employee-search.component'

const routes: Routes = [
  {path : '', component: EmployeeComponent},
  {path : 'emp/newemployee', component: EmployeeComponent},
  {path : 'emp/showallemployees', component: EmployeeListComponent},
  {path : 'emp/searchemployee', component: EmployeeSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
