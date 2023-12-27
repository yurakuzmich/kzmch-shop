import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AddItemComponent } from './add-item/add-item.component';
import { CategoriesListAdminComponent } from './categories-list-admin/categories-list-admin.component';
import { ListItemsAdminComponent } from './list-items-admin/list-items-admin.component';

const routes: Routes = [
  { path: '',
    component: AdminComponent,
    children: [
      {path: 'categories', component: CategoriesListAdminComponent},
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
