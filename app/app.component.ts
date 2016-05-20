import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {FavoriteComponent} from './favorite.component';
import {BootstrapPanel} from './bootstrap.panel.component';

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
    directives: [CoursesComponent, AuthorsComponent, FavoriteComponent, BootstrapPanel]
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

  viewMode = 'map';
}