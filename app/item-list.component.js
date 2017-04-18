import {Component} from "angular2/core"

@Component({
    selector: "my-list",
    template: `<h2>List of developers</h2>
    <ul>
        <li *ngFor="#myItem of itemList">{{myItem.itemName}}</li>
    </ul>`
})

export class ItemComponent{
    public itemList= [
        {name: "Maha"},
        {name: "Viji"},
        {name: "Sheldon"},
    ];
}