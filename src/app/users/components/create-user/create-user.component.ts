import { Component, inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  private userService = inject(UserService);
  private router = inject(Router);
  private activateRoute = inject(ActivatedRoute);

  userId!: string;

  formGroup = new FormGroup({
    membershipId: new FormControl<string | null>(null, [Validators.required]),
    name: new FormControl<string | null>(null, [Validators.required]),
    gender: new FormControl<string | null>(null, [Validators.required]),
    address: new FormControl<string | null>(null),
    mobile: new FormControl<number | null>(null, [
      Validators.required,
      Validators.pattern('[0-9]{10}'),
    ]),
    altMobile: new FormControl<number | null>(null, this.patternValidator(/^[0-9]{10}$/)),
    emailAddress: new FormControl<string | null>(null, [Validators.email]),
  });

  constructor() {}

  ngOnInit() {
    this.userId = this.activateRoute.snapshot.paramMap.get('id')??'';
    if(this.userId){
      this.userService.getUser(parseInt(this.userId)).subscribe((data: User) =>{
       this.formGroup.patchValue({
        ...data
       })
      });
    }
  }

  submit(action: string) {
    if (!this.formGroup.valid) {
      this.formGroup.markAllAsTouched();
      return;
    }
    const user = this.formGroup.getRawValue() as User;
    if(action == 'create'){
      this.userService.addUser(user).subscribe((data:User) => {
        console.log('user is created!');
        this.router.navigate(['../list'], { relativeTo: this.activateRoute });
      });
    }else{
      const updateUser = {
        ...user,
        userId: parseInt(this.userId)
      }
      this.userService.updateUser(updateUser).subscribe((data:User) => {
        console.log('user is updated!');
        this.router.navigate(['../list'], { relativeTo: this.activateRoute });
      });
    }
  }

  cancel() {
    this.formGroup.reset();
    this.router.navigate(['../list'], { relativeTo: this.activateRoute });
  }

  patternValidator(pattern: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (!control.value) {
        return null;
      }
      const valid = pattern.test(control.value);
      return valid ? null : { pattern: { value: control.value } };
    };
  }
}
