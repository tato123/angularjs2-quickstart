/// <reference path="typings/angular2/angular2.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*************************************************
 * As angularJS continues to update, this example will be updated
 * the primary purpose is to provide 'just enough' skeleton to where
 * we can begin to experiment with AngularJS 2
 */
var angular2_1 = require('angular2/angular2');
// ES6 import statements combine the commonjs / require syntax and the left hand assignment
var task_list_1 = require('./components/task-list/task-list');
/**
 * @description
 * Provies a CSS3 style selector that we can use
 * for targeting html
 */
var MyAppComponent = (function () {
    function MyAppComponent() {
        this.title = 'A List of Names';
    }
    MyAppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app'
        }),
        angular2_1.View({
            template: "\n    <div class=\"zd-group\">\n        <h4>{{title}}</h4>\n        <task-list></task-list>\n    </div>\n  ",
            directives: [task_list_1.ChildComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], MyAppComponent);
    return MyAppComponent;
})();
// Similar to AngularJS 1 bootstrap statement, loading this parent component
// into AngularJS
angular2_1.bootstrap(MyAppComponent);
