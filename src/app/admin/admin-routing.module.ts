import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './layout/admin/admin.component';
import { AddItemComponent } from './shop-items/add-item/add-item.component';
import { CategoriesListAdminComponent } from './categories/categories-list-admin/categories-list-admin.component';
import { ListItemsAdminComponent } from './shop-items/list-items-admin/list-items-admin.component';
import { AddCategoryComponent } from './categories/add-category/add-category.component';

const routes: Routes = [
  { path: '',
    component: AdminComponent,
    children: [
      {path: 'categories', component: CategoriesListAdminComponent},
      {path: 'add-category', component: AddCategoryComponent},
      {path: 'add-item', component: AddItemComponent},
      {path: '', component: ListItemsAdminComponent},
    ],
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
