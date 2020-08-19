import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
 @ViewChild('f') seForm:NgForm;
  subscription:Subscription;
  editMode=false;
  editItemIndex:number;
  editItem:Ingredient;
  constructor(private shoppingService:ShoppingService) { }

  ngOnInit() {
    this.subscription = this.shoppingService.startedEditing
    .subscribe(
      (index:number) => {
        this.editItemIndex = index;
        this.editMode = true;
        this.editItem = this.shoppingService.getIngredient(index);
        this.seForm.setValue({
          name: this.editItem.name,
          amount:this.editItem.amount
        });
      }
    );
  }

  onAddItem(form:NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode){
      this.shoppingService.updateIngredient(this.editItemIndex, newIngredient);
    }else{
      this.shoppingService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.seForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.onClear();
    this.shoppingService.deleteIngredient(this.editItemIndex);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
