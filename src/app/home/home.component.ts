import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public articles;
  public errorMessage;

  public welcomeTitle = "Notepad!";
  public welcomeMessage = "Where I write my random thoughts";

  constructor(private _articleService: ArticlesService) { }

  ngOnInit() {
    this._articleService.getAllArticles()
        .subscribe(
            data => this.articles = data,
            error => this.errorMessage = error
          );
  }

}
