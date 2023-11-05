import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './shop/catalog/catalog.component';
import { AddItemComponent } from './shop/add-item/add-item.component';

const routes: Routes = [
  {path: 'catalog', component: CatalogComponent},
  {path: 'add-item', component: AddItemComponent},
  {path: '', redirectTo: '/', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
