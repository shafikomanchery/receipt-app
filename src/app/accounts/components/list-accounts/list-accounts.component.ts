import { Component, OnInit } from '@angular/core';
import { Account, AccountStatus } from '../../../models/account';
import { AccountUtil } from '../../../utils/account.util';

@Component({
  selector: 'app-list-accounts',
  templateUrl: './list-accounts.component.html',
  styleUrls: ['./list-accounts.component.scss'],
})
export class ListAccountsComponent implements OnInit {
  accounts: Account[] = [
    {
      accountId: 1,
      accountName: 'Monthly rentals',
      startDate: '01/12/2024',
      endDate: '12/12/2025',
      dueDate: '10',
      createdDate: '12/12/2024',
      updatedDate: '12/12/2024',
      ownerName: 'Mohammed Shafi KK',
      amount: 500,
      status: AccountStatus.ACTIVE,
    },
    {
      accountId: 2,
      accountName: 'Monthly rentals',
      startDate: '01/12/2024',
      endDate: '12/12/2025',
      dueDate: '10',
      createdDate: '12/12/2024',
      updatedDate: '12/12/2024',
      ownerName: 'Mohammed Shafi KK',
      amount: 500,
      status: AccountStatus.ACTIVE,
    },
    {
      accountId: 3,
      accountName: 'Monthly rentals',
      startDate: '01/12/2024',
      endDate: '12/12/2025',
      dueDate: '10',
      createdDate: '12/12/2024',
      updatedDate: '12/12/2024',
      ownerName: 'Mohammed Shafi KK',
      amount: 500,
      status: AccountStatus.ACTIVE,
    },
    {
      accountId: 4,
      accountName: 'Monthly rentals',
      startDate: '01/12/2024',
      endDate: '12/12/2025',
      dueDate: '10',
      createdDate: '12/12/2024',
      updatedDate: '12/12/2024',
      ownerName: 'Mohammed Shafi KK',
      amount: 500,
      status: AccountStatus.ACTIVE,
    },
    {
      accountId: 5,
      accountName: 'Monthly rentals',
      startDate: '01/12/2024',
      endDate: '12/12/2025',
      dueDate: '10',
      createdDate: '12/12/2024',
      updatedDate: '12/12/2024',
      ownerName: 'Mohammed Shafi KK',
      amount: 500,
      status: AccountStatus.INACTIVE,
    },
  ];

  constructor() {}

  ngOnInit() {}

  getAccountStatusBg = (status: string) => AccountUtil.getAccountStatusBg(status);
}
