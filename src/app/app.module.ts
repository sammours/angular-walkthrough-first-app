import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerModule } from './customer/customer.module';
import { AppRoutingModule } from './app.routing';
import { ErrorNotFoundComponent } from './shared/error-not-found/error-not-found.component';
import { HeaderComponent } from './shared/header/header.component';
import { CourseModule } from './course/course.module';

@NgModule({
  declarations: [
    AppComponent,
    ErrorNotFoundComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    CustomerModule,
    AppRoutingModule,
    CourseModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
})
export class AppModule { }
