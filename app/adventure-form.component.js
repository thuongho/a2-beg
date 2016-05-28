System.register(['angular2/core', 'angular2/common', 'rxjs/Rx', 'rxjs/add/operator/debounceTime', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1, common_1, Rx_1;
    var AdventureFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            AdventureFormComponent = (function () {
                function AdventureFormComponent(fb) {
                    this.form = fb.group({
                        search: []
                    });
                    var search = this.form.find('search');
                    search.valueChanges
                        .debounceTime(400)
                        .map(function (str) { return str.replace(' ', '-'); })
                        .subscribe(function (x) { return console.log(x); });
                    var observable = Rx_1.Observable.fromArray([1, 2, 3]);
                    var startDates = [];
                    var startDate = new Date();
                    for (var day = -2; day <= 2; day++) {
                        var date = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + day);
                        startDates.push(date);
                    }
                    Rx_1.Observable
                        .fromArray(startDates)
                        .map(function (date) {
                        console.log("Getting deals for date" + date);
                        return [1, 2, 3]; //return data to the subscribe
                    })
                        .subscribe(function (x) { return console.log(x); });
                    // var timerObservable = Observable.interval(1000); // call to the server to get tweets emails etc every minute
                    // timerObservable
                    //   .map(x => {
                    //     console.log("calling the server to get the latest news");
                    //   })
                    // .flatMap( x => {
                    //   console.log("calling the server to get the latest news");
                    //   return observable.of([1,2,3])
                    //  })
                    // .subscribe(news => console.log(news));
                    // RUNNING PARALLEL - grabbing two items and return them together
                    var userStream = Rx_1.Observable.of({
                        userId: 1, username: 'sam'
                    }).delay(2000);
                    var tweetsStream = Rx_1.Observable.of([1, 2, 3]).delay(1500);
                    // Observable
                    //   .forkJoin(userStream, tweetsStream)
                    //   .subscribe(result => console.log(result));
                    Rx_1.Observable
                        .forkJoin(userStream, tweetsStream)
                        .map(function (joined) { return new Object({ user: joined[0], tweets: joined[1] }); }) // map into data structure that app expects
                        .subscribe(function (result) { return console.log(result); });
                    // failed observable
                    var failObservable = Rx_1.Observable.throw(new Error("Something failed."));
                    failObservable.subscribe(function (x) { return console.log(x); }, function (error) { return console.error(error); });
                }
                AdventureFormComponent = __decorate([
                    core_1.Component({
                        selector: 'adventure-form',
                        template: "\n    <form [ngFormModel]=\"form\">\n      <input type=\"text\" ngControl=\"search\" />\n    </form>\n  ",
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], AdventureFormComponent);
                return AdventureFormComponent;
            }());
            exports_1("AdventureFormComponent", AdventureFormComponent);
        }
    }
});
//# sourceMappingURL=adventure-form.component.js.map