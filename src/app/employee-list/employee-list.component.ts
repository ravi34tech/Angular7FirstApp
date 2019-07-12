import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit {
title = "Employee List";
employees:Employee [] = [];
//   employees = [
//     {
//       name: 'Ravi',
//       id: 799
//     },
//     {
//       name: 'Shoaib',
//       id: 699 
//     },
//     {
//       name: 'Naren',
//       id: 299
//     },
//     {
//       name: 'Sagar',
//       id: 399
//     }
// ];

  constructor(private empService:EmployeeService) {
   }

  ngOnInit() {
    this.getAll();
  }

  getAll():void{
    this.empService.findAll().subscribe(empAll=> this.employees=empAll);
  }


}
