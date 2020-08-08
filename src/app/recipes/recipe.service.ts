import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import {Recipe} from '../recipes/recipes.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping/shopping.service';


@Injectable()
export class RecipeService {
  

    private recipes: Recipe[] = [
        new Recipe('Pasta',
        'The Italian breakfast',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSO5zUhJd4-z6mv02PNJbhAY8UzaQczEGJ65Q&usqp=CAU',
        [
          new Ingredient('wheat',4),
          new Ingredient('cheese',5)
        ]),
       
        new Recipe('Nuggets',
        'American Snacks',
        'https://i.pinimg.com/originals/3e/b7/b6/3eb7b61678479c9a7acd36e7da168da0.jpg',
        [
          new Ingredient('chicken',2),
          new Ingredient('ketchup',1)
        ]),
      
      ];

      constructor(private shoppingService:ShoppingService){}

      getRecipes(){
        return this.recipes.slice();
      }

      addIngredientsToShopping(ingredients:Ingredient[]){
        this.shoppingService.IngredientsForRecipeSelected(ingredients);
      }

      getRecipe(index:number){
        return this.recipes.slice()[index];
      }
}