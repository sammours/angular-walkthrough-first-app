export class Course {
    public id: number;
    public name: string;
    public date: Date;
    public mark: number;
    public minimumMark: number;

    constructor() {}

    public initialize(id: number,
        name: string,
        date: Date,
        mark: number = 100,
        minimumMark: number = 60): Course {
            const course = new Course();
            course.id = id;
            course.name = name;
            course.date = date;
            course.mark = mark;
            course.minimumMark = minimumMark;
            return course;
        }
}
