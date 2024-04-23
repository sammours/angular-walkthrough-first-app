import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import { Course } from '../models/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  public courses: Course[];
  public currentCourse: Course;

  constructor(private service: CourseService) {
    this.courses = new Array<Course>();
    this.currentCourse = new Course();
  }

  ngOnInit() {
    this.service.getAll().subscribe(result => {
      this.courses = result;
    });
  }

  public delete(id: number): void {
    this.courses = this.courses.filter(x => x.id !== id);
  }

  public edit(id: number): void {
    const course = this.courses.find(x => x.id === id);
    if (course != null) {
      this.currentCourse = JSON.parse(JSON.stringify(course));
    }
  }

  public save(): void {
    const existedCourse = this.courses.find(x => x.id === this.currentCourse.id);
    if (existedCourse != null) {
      existedCourse.name = this.currentCourse.name;
    } else {
      this.courses.push(this.currentCourse);
    }
  }

}
