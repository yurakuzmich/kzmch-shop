import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './layout/admin/admin.component';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { ListItemsAdminComponent } from './shop-items/list-items-admin/list-items-admin.component';
import { ItemAdminComponent } from './shop-items/item-admin/item-admin.component';
import { ItemPageAdminComponent } from './shop-items/item-page-admin/item-page-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddItemComponent } from './shop-items/add-item/add-item.component';
import { SignOutAdminComponent } from './layout/sign-out-admin/sign-out-admin.component';
import { MenuAdminComponent } from './layout/menu-admin/menu-admin.component';
import { CategoriesListAdminComponent } from './categories/categories-list-admin/categories-list-admin.component';
import { CategoryEditComponent } from './categories/category-edit/category-edit.component';
import { AddCategoryComponent } from './categories/add-category/add-category.component';


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
    CategoryEditComponent,
    AddCategoryComponent,
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
