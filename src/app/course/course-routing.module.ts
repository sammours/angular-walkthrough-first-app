import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { AddCourseComponent } from './add-course/add-course.component';

export const courseRoutes: Routes = [
  { path: '', component: CourseComponent },
  { path: 'add', component: AddCourseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(courseRoutes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
