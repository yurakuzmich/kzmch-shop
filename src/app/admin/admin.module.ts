import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { ListItemsAdminComponent } from './list-items-admin/list-items-admin.component';
import { ItemAdminComponent } from './item-admin/item-admin.component';
import { ItemPageAdminComponent } from './item-page-admin/item-page-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddItemComponent } from './add-item/add-item.component';
import { SignOutAdminComponent } from './sign-out-admin/sign-out-admin.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { CategoriesListAdminComponent } from './categories-list-admin/categories-list-admin.component';


@NgModule({
  declarations: [
    AdminComponent,
    ListItemsAdminComponent,
    ItemAdminComponent,
    ItemPageAdminComponent,
    AddItemComponent,
    SignOutAdminComponent,
    MenuAdminComponent,
    CategoriesListAdminComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    AmplifyAuthenticatorModule,
  ]
})
export class AdminModule { }
