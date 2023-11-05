import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesMenuComponent } from './categories-menu/categories-menu.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [
    CategoriesMenuComponent,
    CategoriesListComponent,
    CatalogComponent,
    ListComponent,
    ItemComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class ShopModule { }
