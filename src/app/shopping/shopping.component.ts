import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
 
  ingredients:Ingredient[];
  constructor(private shoppingService:ShoppingService) { }

  ngOnInit(): void {
   this.ingredients = this.shoppingService.getIngredient();
   this.shoppingService.ingredientsChanged.subscribe(
     (ingredients:Ingredient[])=>{
      this.ingredients = ingredients;
     }
   );
  }

}
