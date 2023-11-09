import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesMenuComponent } from './categories-menu/categories-menu.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddItemComponent } from './add-item/add-item.component';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { LandingComponent } from './landing/landing.component';
import { RouterModule } from '@angular/router';
import { ItemPageComponent } from './item-page/item-page.component';
import { BackButtonComponent } from '../layout/back-button/back-button.component';

@NgModule({
  declarations: [
    CategoriesMenuComponent,
    CategoriesListComponent,
    CatalogComponent,
    ListComponent,
    ItemComponent,
    FilterComponent,
    AddItemComponent,
    LandingComponent,
    ItemPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AmplifyAuthenticatorModule,
    BackButtonComponent,
  ]
})
export class ShopModule { }
