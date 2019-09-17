import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { take } from 'rxjs/operators';
import { Recipe } from '../model/recipe';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private recipe: Recipe = {};
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
  }

  async addRecipe(recipe: Recipe) {
    const updatedRecipe: Recipe = await this.http.put<Recipe>(environment.baseUrl + `recipe/add`, recipe)
      .pipe(take(1))
      .toPromise();
  }

}
