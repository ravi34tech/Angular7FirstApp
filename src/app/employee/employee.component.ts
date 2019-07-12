import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {

  employeeArr : Employee[] = [];
  newEmployee = new Employee();
  constructor(private empService:EmployeeService) { }

  ngOnInit() {
    this.getAll();
  }

  add(name:string):void{
    name = name.trim();
    if(!name){
      return;
    }
    console.info("employee name : "+name);
    
    this.newEmployee.name=name;    
    this.empService.save(this.newEmployee).subscribe(emp=> (console.info("responce id : "+emp.id),
    this.employeeArr.push(emp)));
    console.info(this.employeeArr);
  }

  getAll():void{
    this.empService.findAll().subscribe(empAll=> this.employeeArr=empAll);
  }


}
