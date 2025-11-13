import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

interface Employee {
  id: number;
  name: string;
  department: string;
  position: string;
  salary: number;
  joinDate: string;
}

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule, TableModule],
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[] = [];

  ngOnInit(): void {
    this.employees = [
      { id: 1, name: 'John Doe', department: 'Engineering', position: 'Senior Developer', salary: 120000, joinDate: '2020-01-15' },
      { id: 2, name: 'Jane Smith', department: 'Marketing', position: 'Marketing Manager', salary: 95000, joinDate: '2019-06-20' },
      { id: 3, name: 'Sam Wilson', department: 'Engineering', position: 'Junior Developer', salary: 70000, joinDate: '2021-09-10' },
      { id: 4, name: 'Alice Johnson', department: 'HR', position: 'HR Specialist', salary: 75000, joinDate: '2020-03-05' },
      { id: 5, name: 'Bob Brown', department: 'Sales', position: 'Sales Executive', salary: 85000, joinDate: '2019-11-12' }
    ];
  }
}
