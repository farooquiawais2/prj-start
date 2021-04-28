import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe( 'A Test Recipe', 'This is a simply a test', 'https://feelgoodfoodie.net/wp-content/uploads/2019/07/One-Pan-Pasta-8.jpg' ),
    new Recipe( 'Another Test Recipe', 'This is a simply a test', 'https://feelgoodfoodie.net/wp-content/uploads/2019/07/One-Pan-Pasta-8.jpg' )
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit( recipe );
  }
}
