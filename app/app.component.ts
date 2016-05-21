import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {FavoriteComponent} from './favorite.component';
import {BootstrapPanel} from './bootstrap.panel.component';
import {ZippyComponent} from './zippy.component';
import {ContactFormComponent} from './contact-form.component';
import {SignUpFormComponent} from './signup-form.component';
import {PostService} from './post.service';
// constant provider for the http class and all the depedents for the other classes
import {HTTP_PROVIDERS} from 'angular2/http';

// import lifecycle hook
import {OnInit} from 'angular2/core'

@Component({
    selector: 'my-app',
    template: `
      <h1>Courses Machine</h1>
      <div *ngIf="isLoading">
        <i class="fa fa-spinner fa-spin fa-3x"></i>
      </div>
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
      <br />
      <contact-form></contact-form>
      <br />
      <signup-form></signup-form>
      `,
    directives: [CoursesComponent, AuthorsComponent, FavoriteComponent, BootstrapPanel, ZippyComponent, ContactFormComponent, SignUpFormComponent],
    providers: [PostService, HTTP_PROVIDERS]
})

// declare the interface OnInit
export class AppComponent implements OnInit { 
  // render loader icon dynamically
  isLoading = true;

  constructor(private _postService: PostService) {
  }

  // create the method with the same name as the interface
  // method will be called when angular instantiates the component
  // in terms of lifecycle, it is called after the constructor
  ngOnInit(){
    // call the server here
    // this method returns an observable which we need to subscribe
    this._postService.getPosts()
      // subscribe takes a callback function
      .subscribe(posts => {
        this.isLoading = false;
        console.log(posts[0].id)
      });
  }

  post = {
    title: "Title",
    isFavorite: true
  }

  onFavoriteChange($event) {
    console.log($event);
  }

  courses = ['course1', 'course2'];

  
}