import {Component, View} from "angular2/core"
import {ItemComponent} from "./item-list.component"

@Component({
    selector: "my-app",
    tempalte: "<my-list></mylist>",
    directives: [ItemComponent]
})

