import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationComponent } from './components/organization/organization.component';
import { OrganizationRoutingModule } from './organization-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateOrgComponent } from './components/create-org/create-org.component';
import { ViewOrgComponent } from './components/view-org/view-org.component';
import { AccountsModule } from "../accounts/accounts.module";
import { ListOrganizationsComponent } from './components/list-organizations/list-organizations.component';

@NgModule({
  imports: [
    CommonModule,
    OrganizationRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AccountsModule
],
  declarations: [OrganizationComponent,CreateOrgComponent,ViewOrgComponent,ListOrganizationsComponent]
})
export class OrganizationModule { }
