import { Routes } from '@angular/router';

export const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'login' },
	{
		path: 'login',
		loadComponent: () => import('./login/login.component').then((m) => m.LoginComponent),
	},
	{
		path: 'dashboard',
		loadComponent: () => import('./dashboard/dashboard.component').then((m) => m.DashboardComponent),
		children: [
			{
				path: 'users',
				loadComponent: () => import('./dashboard/users/users.component').then((m) => m.UsersComponent),
			},
			{
				path: 'employees',
				loadComponent: () => import('./dashboard/employees/employees.component').then((m) => m.EmployeesComponent),
			},
			{
				path: 'admin',
				loadComponent: () => import('./dashboard/admin/admin.component').then((m) => m.AdminComponent),
			},
			{
				path: 'claims',
				loadComponent: () => import('./dashboard/claims/claims.component').then((m) => m.ClaimsComponent),
			},
			{
				path: '',
				redirectTo: 'users',
				pathMatch: 'full',
			},
		],
	},
	// you can add more routes here later
];
