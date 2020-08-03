import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  ingredients:Ingredient[] = [
    new Ingredient('apple',5),
    new Ingredient('custard powder',1)
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onIngredientObtained(ingredient){
    this.ingredients.push(ingredient);
  }
}
