import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Title }     from '@angular/platform-browser';

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
  public lastPage = false;

  public welcomeTitle = "Notepad!";
  public welcomeMessage = "Where I write my random thoughts";
  public currentPage = 1;

  constructor(private _articleService: ArticlesService, private titleService: Title) {
    this.getArticles(this.currentPage);
    this.setTitle('Notepad || A Simple Blog In Angular');
   }

  ngOnInit() {
  }

  getArticles(page : number){
    this._articleService.getAllArticles(page)
        .subscribe(
            data => {
              this.articles = data.data;
              this.haveArticles = true;
              this.currentPage = data.current_page;
              if(page == data.last_page){
                this.lastPage = true;
              }
            },
            error => this.errorMessage = error
          );
  }

  setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  loadNextPage(page : number){
    let nextPage = page + 1;
    this.getArticles(nextPage);
  }

  loadPreviousPage(page : number){
    let previousPage = page - 1;
    this.getArticles(previousPage);
  }

}
