import { Subject } from 'rxjs';
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingService {

    ingredientsChanged = new Subject<Ingredient[]>();
    ingredients:Ingredient[] = [
        new Ingredient('apple',5),
        new Ingredient('custard powder',1)
      ];

    getIngredient(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    IngredientsForRecipeSelected(ingredients:Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}