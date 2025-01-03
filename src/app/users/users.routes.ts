import { Component } from '@angular/core';
import { UsersComponent } from './components/users/users.component';
import { Routes } from '@angular/router';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { ListUsersComponent } from './components/list-users/list-users.component';

export const userRoutes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: 'list',
        component: ListUsersComponent,
      },
      {
        path: 'create',
        component: CreateUserComponent,
      },
      {
        path: 'user/:id',
        component: ViewUserComponent,
      },
      {
        path: 'user/:id/edit',
        component: CreateUserComponent,
      },
      {
        path:'**',
        redirectTo:'list',
        pathMatch:'full'
      }
    ],
  },
];
