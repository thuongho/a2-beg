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
      <br />
      <ul class="nav nav-pills">
      <li [class.active]="viewMode == 'map'"><a (click)= "viewMode = 'map'">Map View</a></li>
      <li [class.active]="viewMode == 'list'"><a (click)= "viewMode = 'list'">List View</a></li>
      </ul>
      <div [ngSwitch]="viewMode">
        <template [ngSwitchWhen]="'map'">Map View Content</template>
        <template [ngSwitchWhen]="'list'">List View Content</template>
      </div>
      <br />
      <ul>
        <li *ngFor="#course of courses, #i = index">
          {{ i + 1 }} - {{ course }}
        </li>
        <template ngFor [ngForOf]="courses" #course #i=index>
          <li>{{ i + 1 }} - {{ course }}</li>
        </template>
      </ul>
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

  viewMode = 'map';
}