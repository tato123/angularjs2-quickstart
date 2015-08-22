/// <reference path="typings/angular2/angular2.d.ts" />

/*************************************************
 * As angularJS continues to update, this example will be updated
 * the primary purpose is to provide 'just enough' skeleton to where  
 * we can begin to experiment with AngularJS 2
 */ 


import {Component, View, bootstrap} from 'angular2/angular2';
// ES6 import statements combine the commonjs / require syntax and the left hand assignment
import {ChildComponent} from './components/task-list/task-list'

/**
 * @description
 * Provies a CSS3 style selector that we can use
 * for targeting html 
 */
@Component({
    selector: 'my-app'
})

/**
 * @description
 * Exposed view using AngularJS2 newer structure where 
 * we try to more carefully respect that everything is a tree
 */
@View({
 template: `
    <div class="zd-group">
        <h4>{{title}}</h4>
        <task-list></task-list>
    </div>
  `,
  directives: [ChildComponent]
})

/**
 * @description 
 * A Typescript based class for more information
 * review the Typescript documentation 
 * 
 * http://www.typescriptlang.org/Handbook
 */
class MyAppComponent {
    title:String
    constructor() {
        this.title = 'A List of Names';
    }  
}

// Similar to AngularJS 1 bootstrap statement, loading this parent component
// into AngularJS
bootstrap(MyAppComponent);