import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Recipe One',
      'Description Test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0xeXHW7Hhz7riSMZ2IEi2voe6OVSCiqkoNQ&usqp=CAU'
    ),
    new Recipe(
      'Recipe One',
      'Description Test',
      'https://pinchofyum.com/cdn-cgi/image/width=360,height=514,fit=crop/wp-content/uploads/Couscous-Salad-1-3.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
