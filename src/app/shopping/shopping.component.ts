import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit,OnDestroy {
 
  ingredients:Ingredient[];
  private igChangedSub: Subscription;

  constructor(private shoppingService:ShoppingService) { }

  ngOnInit(): void {
   this.ingredients = this.shoppingService.getIngredient();
   this.igChangedSub = this.shoppingService.ingredientsChanged.subscribe(
     (ingredients:Ingredient[])=>{
      this.ingredients = ingredients;
     }
   );
  }

  ngOnDestroy(){
    this.igChangedSub.unsubscribe();
  }
}
