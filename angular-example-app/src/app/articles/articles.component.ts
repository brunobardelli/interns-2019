import { ArticlesService } from './shared/articles.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bx-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  arrArticles = [];

  constructor(private articlesService: ArticlesService) { }

  ngOnInit() {
    this.articlesService.getAll().subscribe((res) => {
      console.log(res);
      this.arrArticles = res;
    });
  }

}
