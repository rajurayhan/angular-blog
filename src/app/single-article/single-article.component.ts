import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { ArticlesService } from '../services/articles.service';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.css']
})
export class SingleArticleComponent implements OnInit {

  public articleId;
  public article = {
  	'title' : '',
  	'created_at' : '',
  	'description' : ''
  };
  // public article;
  public hasArticle = false;
  public errorMessage;

  constructor(private router: Router, private route: ActivatedRoute, private _articleService: ArticlesService, private titleService: Title) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.articleId = id;
      this._articleService.getArticle(id)
        .subscribe(
            data => {
            		this.hasArticle = true;
                this.article = data;
                this.setTitle(this.article.title);
            	},
            error => this.errorMessage = error
          );
    });
    // this.setTitle(this.article.title);
   }

  ngOnInit() {
  	// this.route.paramMap.subscribe((params: ParamMap) => {
    //   let id = parseInt(params.get('id'));
    //   this.articleId = id;
    //   // console.log(this.articleId);
    //   this._articleService.getArticle(id)
    //     .subscribe(
    //         data => {
    //         		this.hasArticle = true;
    //         		this.article = data;
    //         	},
    //         error => this.errorMessage = error
    //       );
    // });
    // console.log(document);
  }

  setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

}
