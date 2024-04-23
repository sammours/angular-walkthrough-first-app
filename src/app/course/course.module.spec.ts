import { CourseModule } from './course.module';

describe('CourseModule', () => {
  let courseModule: CourseModule;

  beforeEach(() => {
    courseModule = new CourseModule();
  });

  it('should create an instance', () => {
    expect(courseModule).toBeTruthy();
  });
});
