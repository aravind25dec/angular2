import {Component} from "angular2/core"

@Component({
    selector: 'my-app',
    template: `
        <h2>Event filtering demo</h2>
        <input #mykey (keyup.enter)="values=mykey.value" />
        <p>{{values}}</p>
    `
})

export class EventFilteringComponent {}