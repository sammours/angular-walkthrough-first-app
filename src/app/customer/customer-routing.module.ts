import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer.component';

export const cutomerRoutes: Routes = [
  { path: '', component: CustomerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(cutomerRoutes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
