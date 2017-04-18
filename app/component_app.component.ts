import {Component, View} from "angular2/core";

@Component({
    selector: "my-app"
})

@View({
    template: "<h2>Welcome by {{name}}</h2>"
})

export class App{
    name: "Wam Team Developers"
}