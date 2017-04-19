import {Component} from "angular2/core"

@Component({
    selector: "my-list",
    template: `
        <ul>
            <li *ngFor="#listItem of ListItems" (click)="onItemClicked(listItem)">{{listItem.name}}</li>
        </ul>

        <input type="text" [(ngModel)]="selectedItem.name" />
        <button (click)="onDeleteItem()">Delete Item</button>
        <input type="text" #addItem>
        <button (click)="OnAddItem(addItem)">Add Item</button>
    `
})

export class ItemListComponent{
    public ListItems =[
        {name: "apple"},
        {name: "orange"},
        {name: "grapes"}
    ];

    public selectedItem = {name:""};

    onItemClicked(listItem){
        this.selectedItem = listItem
    }

    OnAddItem(listItem){
        this.ListItems.push({name:listItem.value})
    }

    onDeleteItem(){
        this.ListItems.splice(this.ListItems.indexOf(this.selectedItem), 1);
    }
}