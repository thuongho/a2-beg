import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {FavoriteComponent} from './favorite.component';
import {BootstrapPanel} from './bootstrap.panel.component';
import {ZippyComponent} from './zippy.component';

@Component({
    selector: 'my-app',
    template: `
      <h1>Courses Machine</h1>
      <div [hidden]="courses.length == 0">
        List of courses
      </div>
      <div *ngIf="courses.length == 0">
        You don't have any courses yet
      </div>
      <courses></courses>
      <authors></authors>
      <bs-panel>
        <div class="heading">The Heading</div>
        <div class="body">This is the body!</div>
      </bs-panel>
      <favorite [isFavorite]="post.isFavorite" (change)="onFavoriteChange($event)"></favorite>
      <zippy title="Who can see my stuff?">
        Content of who can see my stuff
      </zippy>
      <zippy title="Who can contact me?">
        Content of who can contact me
      </zippy>
      `,
    directives: [CoursesComponent, AuthorsComponent, FavoriteComponent, BootstrapPanel, ZippyComponent]
})
export class AppComponent { 
  post = {
    title: "Title",
    isFavorite: true
  }

  onFavoriteChange($event) {
    console.log($event);
  }

  courses = ['course1', 'course2'];

  
}