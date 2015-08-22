import {Component, View, bootstrap, NgFor} from 'angular2/angular2';

// @see {app.ts}
@Component({
    selector: 'task-list'
})


// @see {app.ts}
@View({
  template: `
    <ul>
     <li *ng-for="#name of names">
        {{ name }}
     </li>
    </ul>
  `,
  directives: [NgFor]
})

/**
 * @description
 * Represents a component that we will use to list 
 * all of the names from the AngularJS.io example.
 *
 * Similar to commonjs and requirejs we need to export this
 * class to indicate to others importing that this is a publicly avabilable
 * class
 */
export class ChildComponent {
  message: string;
  names: Array<string>;
  constructor() {
    this.message = "I'm the child";
    this.names = ["Alice", "Aarav", "Martín", "Shannon", "Ariana", "Kai"];
  }
}