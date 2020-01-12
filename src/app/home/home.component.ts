import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //public articles =[];
  public articles;
  public errorMessage;
  public haveArticles = false;

  public welcomeTitle = "Notepad!";
  public welcomeMessage = "Where I write my random thoughts";

  constructor(private _articleService: ArticlesService) { }

  ngOnInit() {
    this._articleService.getAllArticles()
        .subscribe(
            data => { this.articles = data; this.haveArticles = true;},
            error => this.errorMessage = error
          );
    //this.articlePrint();
    //console.log(this.articles)
  }

  articleDetails(article){
    console.log(article.id);
  }

  articlePrint(){
    console.log(this.articles)
  }

}
