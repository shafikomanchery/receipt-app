import { Routes } from "@angular/router";
import { OrganizationComponent } from "./components/organization/organization.component";
import { CreateOrgComponent } from "./components/create-org/create-org.component";
import { ViewOrgComponent } from "./components/view-org/view-org.component";
import { ViewAccountComponent } from "../accounts/components/view-account/view-account.component";
import { ListOrganizationsComponent } from "./components/list-organizations/list-organizations.component";
import { PaymentsComponent } from "../accounts/components/payments/payments.component";

export const OrganizationRoutes: Routes = [{
   path: '',
   component: OrganizationComponent,
   children:[
    {
        path: 'list',
        component: ListOrganizationsComponent

    },
    {
        path:'create',
        component: CreateOrgComponent
    },
    {
        path:'view/:id',
        component: ViewOrgComponent
    },
    {
        path:'view/:id/account/:id',
        component: ViewAccountComponent
    },
    {
        path:'view/:id/account/:id/payments',
        component: PaymentsComponent
    },
    {
        path:'**',
        redirectTo: 'list',
        pathMatch: 'full'
    }
   ]
}]