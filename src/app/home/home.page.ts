import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { take } from 'rxjs/operators';
import { Recipe } from '../model/recipe';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  recipes: Recipe[];

  constructor(private http: HttpClient) {
    this.getRecipeList();
  }

  async getRecipeList() {
    this.recipes = await this.http.get<Recipe[]>(environment.baseUrl + "recipe/all")
      .pipe(take(1))
      .toPromise();
  }

  async updateRecipe(recipe: Recipe) {
    const updatedRecipe: Recipe = await this.http.put<Recipe>(environment.baseUrl + `recipe/update/${recipe.recipeId}`, recipe)
      .pipe(take(1))
      .toPromise();

    this.getRecipeList();
  }

  async deleteRecipe(recipe: Recipe) {
    const updatedRecipe: Recipe = await this.http.put<Recipe>(environment.baseUrl + `recipe/delete/${recipe.recipeId}`, recipe)
      .pipe(take(1))
      .toPromise();

    this.getRecipeList();
  }

}
