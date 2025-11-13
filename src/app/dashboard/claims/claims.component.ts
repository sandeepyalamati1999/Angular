import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

interface Claim {
  id: number;
  claimNumber: string;
  claimant: string;
  amount: number;
  status: string;
  submittedDate: string;
}

@Component({
  selector: 'app-claims',
  standalone: true,
  imports: [CommonModule, TableModule],
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.scss']
})
export class ClaimsComponent implements OnInit {
  claims: Claim[] = [];

  ngOnInit(): void {
    this.claims = [
      { id: 1, claimNumber: 'CLM-001', claimant: 'John Doe', amount: 5000, status: 'Approved', submittedDate: '2024-11-01' },
      { id: 2, claimNumber: 'CLM-002', claimant: 'Jane Smith', amount: 7500, status: 'Pending', submittedDate: '2024-11-05' },
      { id: 3, claimNumber: 'CLM-003', claimant: 'Sam Wilson', amount: 3200, status: 'Rejected', submittedDate: '2024-10-28' },
      { id: 4, claimNumber: 'CLM-004', claimant: 'Alice Johnson', amount: 6000, status: 'Approved', submittedDate: '2024-11-08' },
      { id: 5, claimNumber: 'CLM-005', claimant: 'Bob Brown', amount: 4500, status: 'Pending', submittedDate: '2024-11-12' }
    ];
  }
}
