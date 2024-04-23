import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,  of } from 'rxjs';
import { Course } from '../models/course';
import { courses, course } from '../models/data';


import {
    map, catchError,
  } from 'rxjs/operators';

@Injectable()
export class CourseService {

    constructor(private httpClient: HttpClient) { }

    public getAll(): Observable<Course[]> {
        return of(courses).pipe(
            map(result => result)
        );
    }

    public get(): Observable<Course> {
        return of(course).pipe(
            map(result => result)
        );
    }

    public getFromServer(): Observable<Course> {
        return this.httpClient.get('http://myurl.com/api/get/1').pipe(
            map((json: Course) => json)
        );
    }
}
