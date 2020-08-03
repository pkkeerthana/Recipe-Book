import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput',{static:false}) nameInputRef: ElementRef;
  @ViewChild('amountInput',{static:false}) amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }

  addIngredient(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmt  = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmt);
    this.ingredientAdded.emit(newIngredient);
  }
}