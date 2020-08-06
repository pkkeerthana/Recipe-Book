import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput',{static:false}) nameInputRef: ElementRef;
  @ViewChild('amountInput',{static:false}) amountInputRef: ElementRef;
 
  constructor(private shoppingService:ShoppingService) { }

  ngOnInit(): void {
  }

  addIngredient(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmt  = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmt);
    this.shoppingService.addIngredient(newIngredient);
  }
}
