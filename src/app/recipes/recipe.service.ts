import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import {Recipe} from '../recipes/recipes.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping/shopping.service';


@Injectable()
export class RecipeService {
  
  recipesChanged = new Subject<Recipe[]>();
    // private recipes: Recipe[] = [
    //     new Recipe('Pasta',
    //     'The Italian breakfast',
    //     'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSO5zUhJd4-z6mv02PNJbhAY8UzaQczEGJ65Q&usqp=CAU',
    //     [
    //       new Ingredient('wheat',4),
    //       new Ingredient('cheese',5)
    //     ]),
       
    //     new Recipe('Nuggets',
    //     'American Snacks',
    //     'https://i.pinimg.com/originals/3e/b7/b6/3eb7b61678479c9a7acd36e7da168da0.jpg',
    //     [
    //       new Ingredient('chicken',2),
    //       new Ingredient('ketchup',1)
    //     ]),
      
    //   ];

      private recipes:Recipe[] = [];
      constructor(private shoppingService:ShoppingService){}

      setRecipes(recipes:Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
      }

      getRecipes(){
        return this.recipes.slice();
      }

      addIngredientsToShopping(ingredients:Ingredient[]){
        this.shoppingService.IngredientsForRecipeSelected(ingredients);
      }

      getRecipe(index:number){
        return this.recipes.slice()[index];
      }

      addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
      }

      deleteRecipe(index:number) {
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());  
      }
}