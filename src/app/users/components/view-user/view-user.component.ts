import { Component, inject } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../models/user';
import { UserUtil } from '../../../utils/users.util';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent{

  private userService = inject(UserService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  user!: User;

  constructor() { 
    const userId = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(parseInt(userId!)).subscribe((data: User) =>{
      this.user = data;
    });
  }

  getAvatarByGender = (gender: string): string => {
    if(gender =='female')
      return 'assets/icons/woman_avatar.png';
    return 'assets/icons/man_avatar.png'
  }

  getUserStatusBg = (status: string) => UserUtil.getUserStatusBg(status);

  deleteUser(userId: number){
    this.userService.removeUser(userId).subscribe(data => {
      console.log('User deleted!');
    })
  }

}
