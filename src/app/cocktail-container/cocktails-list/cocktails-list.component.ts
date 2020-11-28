import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cocktail } from 'src/app/shared/models/cocktail.model';
import { CocktailService } from '../../shared/services/cocktail.service';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.css']
})

export class CocktailsListComponent implements OnInit {
  public cocktails: Cocktail[];
  public activeCocktail: number = 0;
  constructor(private cocktailService: CocktailService) { }

  ngOnInit(): void {
    this.cocktailService.cocktails.subscribe((cocktails: Cocktail[]) => {
      this.cocktails = cocktails;
    });
  }

  pickCocktail(index: number):void{
    this.activeCocktail = index;
    this.cocktailService.selectCocktail(index);
  }
}
