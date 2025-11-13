import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, MenubarModule, MenuModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  menuItems: MenuItem[] = [];
  userMenuItems: MenuItem[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Users',
        icon: 'pi pi-fw pi-users',
        routerLink: ['/dashboard/users']
      },
      {
        label: 'Employees',
        icon: 'pi pi-fw pi-briefcase',
        routerLink: ['/dashboard/employees']
      },
      {
        label: 'Admin',
        icon: 'pi pi-fw pi-cog',
        routerLink: ['/dashboard/admin']
      },
      {
        label: 'Claims',
        icon: 'pi pi-fw pi-file',
        routerLink: ['/dashboard/claims']
      }
    ];

    this.userMenuItems = [
      {
        label: 'Profile',
        icon: 'pi pi-fw pi-user',
        command: () => this.onProfile()
      },
      {
        label: 'Logout',
        icon: 'pi pi-fw pi-sign-out',
        command: () => this.onLogout()
      }
    ];
  }

  onLogout(): void {
    this.router.navigate(['/login']);
  }

  onProfile(): void {
    console.log('Profile clicked');
    // TODO: Navigate to profile page or show profile modal
    // this.router.navigate(['/dashboard/profile']);
  }
}
