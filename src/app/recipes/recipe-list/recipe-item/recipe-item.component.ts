import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipes.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipeItem:Recipe;
  @Output() RecipeSelected = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }
  
  onSelectRecipe(){
    this.RecipeSelected.emit();
  }
}
