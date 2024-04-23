import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { cutomerRoutes } from './customer/customer-routing.module';
import { ErrorNotFoundComponent } from './shared/error-not-found/error-not-found.component';
import { courseRoutes } from './course/course-routing.module';


export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: AppComponent },
    { path: 'customer', children: [...cutomerRoutes] },
    { path: 'course', children: [...courseRoutes] },
    { path: 'notFound', component: ErrorNotFoundComponent},
    { path: '**', redirectTo: '/notFound' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
