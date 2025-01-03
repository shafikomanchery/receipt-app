import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { OrganizationRoutes } from "./organization.routes";

@NgModule({
    imports: [RouterModule.forChild(OrganizationRoutes)], 
    exports: [RouterModule]
})
export class OrganizationRoutingModule {

}