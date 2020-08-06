import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingService {

    ingredientsChanged = new EventEmitter<Ingredient[]>();
    ingredients:Ingredient[] = [
        new Ingredient('apple',5),
        new Ingredient('custard powder',1)
      ];

    getIngredient(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    IngredientsForRecipeSelected(ingredients:Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}