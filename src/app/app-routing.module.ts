import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductgroupComponent } from './productpage/productgroup/productgroup/productgroup.component';
import { ProductlistComponent } from './productpage/productlist/productlist/productlist.component';
import { ProductpageComponent } from './productpage/productpage.component';

const routes: Routes = [
  { path: '', component: ProductpageComponent },
  { path: 'list', component: ProductlistComponent },
  { path: 'group', component: ProductgroupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
