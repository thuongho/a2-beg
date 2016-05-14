import {Component} from 'angular2/core'

@Component({
  selector: 'favorite',
  template:`
   <i
     class="glyphicon"
     [class.glypicon-star-empty]="!isFavorite"
     [class.glypicon-star]="isFavorite"
     (click)="onClick()">
   </i>
   <input type="button" value="Star" />
  `
})
export class FavoriteComponent {
  isFavorite = false;

  onClick(){
    this.isFavorite = !this.isFavorite;
  }
}