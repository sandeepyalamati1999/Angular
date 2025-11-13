import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
}

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, TableModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  ngOnInit(): void {
    this.users = [
      { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin', status: 'Active' },
      { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Editor', status: 'Active' },
      { id: 3, name: 'Sam Wilson', email: 'sam.wilson@example.com', role: 'Viewer', status: 'Inactive' },
      { id: 4, name: 'Alice Johnson', email: 'alice.johnson@example.com', role: 'Editor', status: 'Active' },
      { id: 5, name: 'Bob Brown', email: 'bob.brown@example.com', role: 'Viewer', status: 'Active' }
    ];
  }
}
