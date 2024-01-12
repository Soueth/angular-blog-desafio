import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ArticleComponent } from './Pages/article/article.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'article',
        component: ArticleComponent
    }
];
