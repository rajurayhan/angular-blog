import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ArticlesComponent } from "./articles/articles.component";
import { SingleArticleComponent } from "./single-article/single-article.component";
import { CategoryArticlesComponent } from "./category-articles/category-articles.component";
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  // {
  //   path: "/",
  //   component: HomeComponent
  // },
  {
    path: "articles",
    component: ArticlesComponent
  },

  {
    path: "articles/:id",
    component: SingleArticleComponent
  },
  {
    path: "category/:id",
    component: CategoryArticlesComponent
  },
  // {
  //   path: "**",
  //   component: NotFoundComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [
  ArticlesComponent,
  SingleArticleComponent,
  CategoryArticlesComponent
]
