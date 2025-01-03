import { inject, Injectable } from '@angular/core';
import { User, UserStatus } from '../models/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private getUsersApiUrl = 'http://localhost:8000/getusers.php';
  private createUserApiUrl = 'http://localhost:8000/createuser.php';
  private getUserApiUrl = 'http://localhost:8000/getuser.php?userId=';
  private updateUserApiUrl = 'http://localhost:8000/updateuser.php';
  private deleteUserApiUrl = 'http://localhost:8000/deleteuser.php';

  private http = inject(HttpClient);

  addUser(user: User) {
    const newUser = {
      ...user,
      username: user.membershipId,
      password: user.mobile.toString(),
      status: UserStatus.ACTIVE,
    };
    return this.http.post<User>(this.createUserApiUrl,newUser);
  }

  removeUser(userId: number) {
    return this.http.post<User>(this.deleteUserApiUrl, { userId });
  }

  getUser(userId: number) {
    return this.http.get<User>(this.getUserApiUrl+userId);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.getUsersApiUrl);
  }

  updateUser(user: User){
    return this.http.post<User>(this.updateUserApiUrl,user);
  }
}
