import { Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http';
import { map,tap } from 'rxjs/operators';

import { Recipe } from "../recipes/recipes.model";
import { RecipeService } from "../recipes/recipe.service";

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {
    constructor(private http:HttpClient,
            private recipeService:RecipeService){}

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        return this.http.put('https://recipe-book-df71d.firebaseio.com/recipes.json',recipes)
        .subscribe(
            response => {
                console.log(response);
            }
        );
    }

    FetchRecipes() {
        return this.http.get<Recipe[]>('https://recipe-book-df71d.firebaseio.com/recipes.json')
        .pipe(
             map( recipes => {
            return recipes.map(recipe =>{
                return {
                    ...recipe,
                    ingredients : recipe.ingredients ? recipe.ingredients : []
                }
            })
        }),
        tap(recipes =>{
            this.recipeService.setRecipes(recipes);
        })
        )
       
    }
}