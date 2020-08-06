import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { ShoppingEditComponent } from './shopping/shopping-edit/shopping-edit.component';
import { HeaderComponent } from './header/header.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingService } from './shopping/shopping.service';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    ShoppingComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    ShoppingEditComponent,
    HeaderComponent,
    RecipeItemComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
