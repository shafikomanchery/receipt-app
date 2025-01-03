import { Component, OnInit } from '@angular/core';
import { Organization, OrgStatus } from '../../../models/organization';
import { OrgUtil } from '../../../utils/organization.util';

@Component({
  selector: 'app-list-organizations',
  templateUrl: './list-organizations.component.html',
  styleUrls: ['./list-organizations.component.scss'],
})
export class ListOrganizationsComponent implements OnInit {
  organizations: Organization[] = [
    {
      orgId: 1,
      orgName: 'Hayathudheen madrasa',
      orgRegNo: '112/2001',
      orgAddress: 'Kuruvattur, Vallapuzha-679336',
      orgEmail: 'hayathudeenmarada@gmail.com',
      orgMobile: 7411534689,
      orgAltMobile: 7411534689,
      createdDate: '12/12/2024',
      updatedDate: '',
      orgStatus: OrgStatus.ACTIVE,
    },
  ];

  constructor() {}

  ngOnInit() {}

  getOrgStatusBg = (status: string) => OrgUtil.getOrgStatusBg(status);
}
