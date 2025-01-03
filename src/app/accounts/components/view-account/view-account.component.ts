import { Component, OnInit } from '@angular/core';
import { Account, AccountStatus } from '../../../models/account';
import { AccountUtil } from '../../../utils/account.util';

@Component({
  selector: 'app-view-account',
  templateUrl: './view-account.component.html',
  styleUrls: ['./view-account.component.scss'],
})
export class ViewAccountComponent implements OnInit {
  account: Account = {
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
  };

  constructor() {}

  ngOnInit() {}

  getAccountStatusBg = (status: string) => AccountUtil.getAccountStatusBg(status);
}
