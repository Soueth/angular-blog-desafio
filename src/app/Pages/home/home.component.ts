import { Component } from '@angular/core';
import { HeadCardComponent } from "../../Components/head-card/head-card.component";
import { BigCardComponent } from "../../Components/big-card/big-card.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HeadCardComponent, BigCardComponent]
})
export class HomeComponent {

}
