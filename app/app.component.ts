import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {FavoriteComponent} from './favorite.component';

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
      <favorite [isFavorite]="post.isFavorite" (change)="onFavoriteChange($event)"></favorite>
      <ul class="nav nav-pills">
      <li [class.active]="viewMode == 'map'"><a (click)= "viewMode = 'map'">Map View</a></li>
      <li [class.active]="viewMode == 'list'"><a (click)= "viewMode = 'list'">List View</a></li>
      </ul>
      <div [ngSwitch]="viewMode">
        <template [ngSwitchWhen]="'map'">Map View Content</template>
        <template [ngSwitchWhen]="'list'">List View Content</template>
      </div>
      `,
    directives: [CoursesComponent, AuthorsComponent, FavoriteComponent]
})
export class AppComponent { 
  post ={
    title: "Title",
    isFavorite: true
  }

  onFavoriteChange($event) {
    console.log($event);
  }

  courses = [];

  viewMode = 'map';
}