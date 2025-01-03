import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User, UserStatus } from '../../../models/user';
import { UserUtil } from '../../../utils/users.util';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  private userService = inject(UserService);

  users: User[]= [];
  // users:User[] = [{
  //     userId: 1,
  //     membershipId: 'Member1001',
  //     username:'Member1001',
  //     password:'7411534689',
  //     name:'Mohammed Shafi K K',
  //     gender:'male',
  //     address:'Kodakkadan komancheri House, Kuruvattur Post, Vallapuzha, Palakkad Dist, Kerala-679336',
  //     emailAddress:'shafihussainkk@gmail.com',
  //     mobile:7411534689,
  //     altMobile:9809187565,
  //     createdDate:'12/12/2024',
  //     updatedDate: '12/12/2024',
  //     status: UserStatus.ACTIVE
  //   },{
  //     userId: 2,
  //     membershipId: 'Member1001',
  //     username:'Member1001',
  //     password:'7411534689',
  //     name:'Mohammed Shafi K K',
  //     gender:'female',
  //     address:'Kodakkadan komancheri House, Kuruvattur Post, Vallapuzha, Palakkad Dist, Kerala-679336',
  //     emailAddress:'shafihussainkk@gmail.com',
  //     mobile:7411534689,
  //     altMobile:9809187565,
  //     createdDate:'12/12/2024',
  //     updatedDate: '12/12/2024',
  //     status: UserStatus.PENDING_VERIFICATION
  //   },{
  //     userId: 3,
  //     membershipId: 'Member1001',
  //     username:'Member1001',
  //     password:'7411534689',
  //     name:'Mohammed Shafi K K',
  //     gender:'male',
  //     address:'Kodakkadan komancheri House, Kuruvattur Post, Vallapuzha, Palakkad Dist, Kerala-679336',
  //     emailAddress:'shafihussainkk@gmail.com',
  //     mobile:7411534689,
  //     altMobile:9809187565,
  //     createdDate:'12/12/2024',
  //     updatedDate: '12/12/2024',
  //     status: UserStatus.BLOCKED
  //   },{
  //     userId: 4,
  //     membershipId: 'Member1001',
  //     username:'Member1001',
  //     password:'7411534689',
  //     name:'Mohammed Shafi K K',
  //     gender:'female',
  //     address:'Kodakkadan komancheri House, Kuruvattur Post, Vallapuzha, Palakkad Dist, Kerala-679336',
  //     emailAddress:'shafihussainkk@gmail.com',
  //     mobile:7411534689,
  //     altMobile:9809187565,
  //     createdDate:'12/12/2024',
  //     updatedDate: '12/12/2024',
  //     status: UserStatus.DELETED
  //   },{
  //     userId: 5,
  //     membershipId: 'Member1001',
  //     username:'Member1001',
  //     password:'7411534689',
  //     name:'Mohammed Shafi K K',
  //     gender:'female',
  //     address:'Kodakkadan komancheri House, Kuruvattur Post, Vallapuzha, Palakkad Dist, Kerala-679336',
  //     emailAddress:'shafihussainkk@gmail.com',
  //     mobile:7411534689,
  //     altMobile:9809187565,
  //     createdDate:'12/12/2024',
  //     updatedDate: '12/12/2024',
  //     status: UserStatus.INACTIVE
  //   }];
  constructor() { }

  ngOnInit() {
    this.userService.getUsers().subscribe((data: User[]) => {
       this.users = data;
    })
  }

  getAvatarByGender = (gender: string): string => {
    if(gender =='female')
      return 'assets/icons/woman_avatar.png';
    return 'assets/icons/man_avatar.png'
  }

  getUserStatusBg = (status: string) => UserUtil.getUserStatusBg(status);


}
