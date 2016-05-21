System.register(['angular2/core', './courses.component', './authors.component', './favorite.component', './bootstrap.panel.component', './zippy.component', './contact-form.component', './signup-form.component', './post.service', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, courses_component_1, authors_component_1, favorite_component_1, bootstrap_panel_component_1, zippy_component_1, contact_form_component_1, signup_form_component_1, post_service_1, http_1;
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
            },
            function (bootstrap_panel_component_1_1) {
                bootstrap_panel_component_1 = bootstrap_panel_component_1_1;
            },
            function (zippy_component_1_1) {
                zippy_component_1 = zippy_component_1_1;
            },
            function (contact_form_component_1_1) {
                contact_form_component_1 = contact_form_component_1_1;
            },
            function (signup_form_component_1_1) {
                signup_form_component_1 = signup_form_component_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_postService) {
                    this._postService = _postService;
                    // render loader icon dynamically
                    this.isLoading = true;
                    this.post = {
                        title: "Title",
                        isFavorite: true
                    };
                    this.courses = ['course1', 'course2'];
                }
                // create the method with the same name as the interface
                // method will be called when angular instantiates the component
                // in terms of lifecycle, it is called after the constructor
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    // call the server here
                    // this method returns an observable which we need to subscribe
                    this._postService.getPosts()
                        .subscribe(function (posts) {
                        _this.isLoading = false;
                        console.log(posts[0].id);
                    });
                };
                AppComponent.prototype.onFavoriteChange = function ($event) {
                    console.log($event);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n      <h1>Courses Machine</h1>\n      <div *ngIf=\"isLoading\">\n        <i class=\"fa fa-spinner fa-spin fa-3x\"></i>\n      </div>\n      <div [hidden]=\"courses.length == 0\">\n        List of courses\n      </div>\n      <div *ngIf=\"courses.length == 0\">\n        You don't have any courses yet\n      </div>\n      <courses></courses>\n      <authors></authors>\n      <bs-panel>\n        <div class=\"heading\">The Heading</div>\n        <div class=\"body\">This is the body!</div>\n      </bs-panel>\n      <favorite [isFavorite]=\"post.isFavorite\" (change)=\"onFavoriteChange($event)\"></favorite>\n      <zippy title=\"Who can see my stuff?\">\n        Content of who can see my stuff\n      </zippy>\n      <zippy title=\"Who can contact me?\">\n        Content of who can contact me\n      </zippy>\n      <br />\n      <contact-form></contact-form>\n      <br />\n      <signup-form></signup-form>\n      ",
                        directives: [courses_component_1.CoursesComponent, authors_component_1.AuthorsComponent, favorite_component_1.FavoriteComponent, bootstrap_panel_component_1.BootstrapPanel, zippy_component_1.ZippyComponent, contact_form_component_1.ContactFormComponent, signup_form_component_1.SignUpFormComponent],
                        providers: [post_service_1.PostService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [post_service_1.PostService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map