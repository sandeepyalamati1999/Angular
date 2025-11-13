import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

interface Admin {
  id: number;
  name: string;
  email: string;
  role: string;
  permissions: string;
  lastLogin: string;
}

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, TableModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  admins: Admin[] = [];

  ngOnInit(): void {
    this.admins = [
      { id: 1, name: 'Super Admin', email: 'admin@example.com', role: 'Super Admin', permissions: 'Full Access', lastLogin: '2024-11-13' },
      { id: 2, name: 'System Admin', email: 'sysadmin@example.com', role: 'System Admin', permissions: 'System Management', lastLogin: '2024-11-12' },
      { id: 3, name: 'Content Admin', email: 'content@example.com', role: 'Content Admin', permissions: 'Content Management', lastLogin: '2024-11-11' },
      { id: 4, name: 'User Admin', email: 'useradmin@example.com', role: 'User Admin', permissions: 'User Management', lastLogin: '2024-11-10' },
      { id: 5, name: 'Security Admin', email: 'security@example.com', role: 'Security Admin', permissions: 'Security Settings', lastLogin: '2024-11-09' }
    ];
  }
}
