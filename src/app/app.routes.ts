import { Routes } from '@angular/router';
import { NotFoundErrorComponent } from './shared/components/not-found-error/not-found-error.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'establishments',
    pathMatch: 'full',
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'establishments',
    loadChildren: () =>
      import('./organization/organization.module').then(
        (m) => m.OrganizationModule
      ),
  },
  {
    path: '404',
    component: NotFoundErrorComponent,
  },
  {
    path:'**',
    redirectTo:'404',
    pathMatch: 'full'
  }
];
