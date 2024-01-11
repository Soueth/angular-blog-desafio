import { Component } from '@angular/core';
import { HeadCardComponent } from "../../Components/head-card/head-card.component";
import { BigCardComponent } from "../../Components/big-card/big-card.component";
import { SmallCardComponent } from "../../Components/small-card/small-card.component";
import { MenuComponent } from "../../Components/menu/menu.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HeadCardComponent, BigCardComponent, SmallCardComponent, MenuComponent]
})
export class HomeComponent {

}
