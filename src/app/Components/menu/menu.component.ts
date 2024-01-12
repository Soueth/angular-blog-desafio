import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  backMenu: string = ''

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    let actualRoute: string = this.route.snapshot.url.join('/')
  }
    
}
