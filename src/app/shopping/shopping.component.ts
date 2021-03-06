import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';
import { Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit,OnDestroy {
 
  ingredients:Ingredient[];
  private igChangedSub: Subscription;

  constructor(private shoppingService:ShoppingService,
              private loggingService: LoggingService) { }

  ngOnInit(): void {
  
   this.ingredients = this.shoppingService.getIngredients();
   this.igChangedSub = this.shoppingService.ingredientsChanged.subscribe(
     (ingredients:Ingredient[])=>{
      this.ingredients = ingredients;
     }
   );

   this.loggingService.printlog('Hallo from shopping component ngOninit');
  }

  onEditItem(index:number){
    this.shoppingService.startedEditing.next(index);
  }

  ngOnDestroy(){
    this.igChangedSub.unsubscribe();
  }
}
