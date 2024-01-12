import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { database } from '../../Database/database';

@Component({
	selector: 'app-article',
	standalone: true,
	imports: [RouterLink],
	templateUrl: './article.component.html',
	styleUrl: './article.component.css',
})
export class ArticleComponent {
	photoCover: string ='';
	articleTitle: string = '';
	articleText: string = '';
  id: string | null = ''
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value => 
      this.id = value.get('id')
    )

    this.populateComponent(this.id)
  }

  populateComponent(id: string | null) {
    const result = database.filter(article => article.id == id)[0]

    this.articleTitle = result.title
    console.log(result.title)
    console.log('O title' + this.articleTitle)
    this.articleText = result.description
    this.photoCover = result.photo
  }
}
