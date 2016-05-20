import {Component} from 'angular2/core'
import {AuthorService} from './author.service'
import {SummaryPipe} from './summary.pipe'

@Component({
  selector: 'authors',
  template: `
    <h2>Authors</h2>
    {{ title }}
    <ul>
      <li *ngFor="#author of authors">
        {{ author }}
      </li>
    </ul>
    {{ post.title }}
    <br />
    {{ post.body | summary:10 }}
    <br />
    <ul>
      <li>Title: {{ task.title }}</li>
      <li>Assigned to: {{ task.assignee?.name }}</li>
    </ul>
    `,
    providers: [AuthorService],
    pipes: [SummaryPipe]
})

export class AuthorsComponent {
  title = "Title for the authors page";
  authors: string[];

  constructor(authorService: AuthorService) {
    this.authors = authorService.getAuthors();
  }

  post = {
    title: "Angular Tut for Beginners",
    body: `
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum delectus illo eius minima blanditiis repudiandae qui, veritatis? At ad ipsa, fugiat, dicta earum ullam quo autem officia natus ipsum et! Voluptatibus facilis, unde asperiores. Architecto alias repudiandae sunt, delectus in consequuntur? Assumenda aperiam, quod! Delectus error similique culpa quidem repudiandae, dolorum nemo molestiae fuga alias quae incidunt quia maiores at.
    `
  }

  task = {
    title: "Review applications",
    assignee: null
  };
}