import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{

   private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'testtest', 'https://www.cookingclassy.com/wp-content/uploads/2019/09/meatballs-21.jpg',
        [new Ingredient('Meat', 1),
         new Ingredient('French Fries', 20)
        ]),
        new Recipe('A Test Recipe2', 'testtest', 'https://www.cookingclassy.com/wp-content/uploads/2019/09/meatballs-21.jpg',
        [new Ingredient('Buns', 1),
         new Ingredient('Meat', 2)
        ])
      ];

    constructor(private slService: ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
        // return of(this.recipes);
    }  

    getRecipe(index:number){
      return this.recipes[index];  //slice?
    }

    addIngredientsToShoppingList(ingredients: Ingredient[])
    {
      this.slService.addIngredients(ingredients);
    }
}