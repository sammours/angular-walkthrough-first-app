import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CourseRoutingModule } from './course-routing.module';
import { CourseComponent } from './course/course.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { CourseService } from './services/course.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    CourseRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CourseService,
    HttpClient
  ],
  declarations: [CourseComponent, AddCourseComponent]
})
export class CourseModule { }
