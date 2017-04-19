import { ITemplateCacheService } from 'angular2/src/upgrade/angular_js';
import { ItemComponent } from './item-list.component';
import {Component} from "angular2/core"

@Component({
    selector: "my-app",
    template: `
        <ul>
            <li 
            *ngFor="#Item of Items"
            (click)="onItemClicked(Item)">{{Item.Name}}</li>
        </ul>
        <input type="text" value="{{clickedItem}}" />
        `
})

export class AppComponent{
    public Items = [
    {Name: "Maha"},
    {Name: "Viji"},
    {Name: "Sheldon"}
    ];

    public clickedItem ="";
    onItemClicked(Item){
        this.clickedItem = Item.Name;
    }
}