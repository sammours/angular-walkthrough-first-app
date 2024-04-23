import { Course } from './course';

export const courses: Course[] = [
    new Course ().initialize(1, 'Java', new Date(2018, 6, 23)),
    new Course ().initialize(2, 'C#', new Date('24.6.2018')),
    new Course ().initialize(3, 'Python', new Date('25.6.2018')),
    new Course ().initialize(4, 'Angular', new Date('26.6.2018')),
    new Course ().initialize(5, 'Javascript', new Date('27.6.2018')),
    new Course ().initialize(6, 'React', new Date('28.6.2018')),
];


export const course: Course = new Course().initialize(1, 'Java', new Date('24.6.2018'), 100, 60);
