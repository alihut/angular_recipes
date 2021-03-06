import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService{
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatos', 5),
      ];

      getIngredients(){
          return this.ingredients.slice();
      }

      getIngredient(index: number){
        return this.ingredients[index];
      }

      addIngredient(ingredient: Ingredient){
          this.ingredients.push(ingredient);
          this.ingredientsChanged.next(this.ingredients.slice());      }

      addIngredients(ingredients: Ingredient[]){
        // for(let ingredient of ingredients)
        // this.addIngredient(ingredient);
        this.ingredients.push(...ingredients);  //array i liste çevirir
        this.ingredientsChanged.next(this.ingredients.slice());
      }    
}