import { Component, OnInit } from '@angular/core';
import { Organization, OrgStatus } from '../../../models/organization';
import { OrgUtil } from '../../../utils/organization.util';

@Component({
  selector: 'app-view-org',
  templateUrl: './view-org.component.html',
  styleUrls: ['./view-org.component.scss'],
})
export class ViewOrgComponent implements OnInit {
  org: Organization = {
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
  };

  constructor() {}

  ngOnInit() {}

  getAvatarByGender = (gender: string): string => {
      if(gender =='female')
        return 'assets/icons/woman_avatar.png';
      return 'assets/icons/man_avatar.png'
    }
  
    getOrgStatusBg = (status: string) => OrgUtil.getOrgStatusBg(status);
}
