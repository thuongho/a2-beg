System.register(['angular2/core', './courses.component', './authors.component', './favorite.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, courses_component_1, authors_component_1, favorite_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.post = {
                        title: "Title",
                        isFavorite: true
                    };
                    this.courses = ['course1', 'course2'];
                    this.viewMode = 'map';
                }
                AppComponent.prototype.onFavoriteChange = function ($event) {
                    console.log($event);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n      <h1>Courses Machine</h1>\n      <div [hidden]=\"courses.length == 0\">\n        List of courses\n      </div>\n      <div *ngIf=\"courses.length == 0\">\n        You don't have any courses yet\n      </div>\n      <courses></courses>\n      <authors></authors>\n      <favorite [isFavorite]=\"post.isFavorite\" (change)=\"onFavoriteChange($event)\"></favorite>\n      <ul class=\"nav nav-pills\">\n      <li [class.active]=\"viewMode == 'map'\"><a (click)= \"viewMode = 'map'\">Map View</a></li>\n      <li [class.active]=\"viewMode == 'list'\"><a (click)= \"viewMode = 'list'\">List View</a></li>\n      </ul>\n      <div [ngSwitch]=\"viewMode\">\n        <template [ngSwitchWhen]=\"'map'\">Map View Content</template>\n        <template [ngSwitchWhen]=\"'list'\">List View Content</template>\n      </div>\n      <br />\n      <ul>\n        <li *ngFor=\"#course of courses, #i = index\">\n          {{ i + 1 }} - {{ course }}\n        </li>\n      </ul>\n      ",
                        directives: [courses_component_1.CoursesComponent, authors_component_1.AuthorsComponent, favorite_component_1.FavoriteComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map