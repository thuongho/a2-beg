import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {FavoriteComponent} from './favorite.component';

@Component({
    selector: 'my-app',
    template: `
      <h1>Courses Machine</h1>
      <courses></courses>
      <authors></authors>
      <favorite></favorite>
      `,
    directives: [CoursesComponent, AuthorsComponent, FavoriteComponent]
})
export class AppComponent { 

}