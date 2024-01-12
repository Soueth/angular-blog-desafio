import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeadCardComponent } from "./Components/head-card/head-card.component";
import { HomeComponent } from "./Pages/home/home.component";
import { MenuComponent } from "./Components/menu/menu.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HeadCardComponent, HomeComponent, MenuComponent]
})
export class AppComponent {
  title = 'angular-blog-desafio';
}
