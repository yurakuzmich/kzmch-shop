import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './shop/catalog/catalog.component';
import { AddItemComponent } from './shop/add-item/add-item.component';
import { LandingComponent } from './shop/landing/landing.component';
import { ItemPageComponent } from './shop/item-page/item-page.component';

const routes: Routes = [
  {path: 'catalog', component: CatalogComponent},
  {path: 'catalog/:id', component: ItemPageComponent},
  {path: 'add-item', component: AddItemComponent},
  {path: 'landing', component: LandingComponent},
  {path: '', redirectTo: '/landing', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
