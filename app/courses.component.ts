import {Component} from 'angular2/core'
import {CourseService} from './course.service'
import {AutoGrowDirective} from './auto-grow.directive'

@Component({
    selector: 'courses',  // CSS selector for host HTML element
    template: `
      <h2>Courses</h2>
      {{ title }}
      <input type="text" autoGrow />
      <ul>
        <li *ngFor="#course of courses">
          {{ course }}
        </li>
      </ul>
      {{ course.title | uppercase | lowercase }}
      <br />
      {{ course.students | number }}
      <br />
      {{ course.rating | number: '2.2-2' }}
      <br />
      {{ course.price | currency:'AUD':true:'2.2-2' }}
      <br />
      {{ course.releaseDate | date:'MMM yyyy' }}
      <br />
      {{ course | json }}
      `,
      providers: [CourseService],
      directives: [AutoGrowDirective]
})

export class CoursesComponent {
  title = "The title of courses page";
  courses;
  course = {
    title: "Angular 2 for Beginners",
    rating: 4.9745,
    students: 5981,
    price: 99.95,
    releaseDate: new Date(2016, 3, 1)
  };

  constructor(courseService: CourseService) {
    this.courses = courseService.getCourses();
  }
}