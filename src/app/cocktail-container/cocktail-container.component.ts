import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../shared/cocktail.model';

@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrls: ['./cocktail-container.component.css']
})
export class CocktailContainerComponent implements OnInit {
  public cocktails: Cocktail[] = [
    new Cocktail('Mojito', 'https://www.papillesetpupilles.fr/wp-content/uploads/2006/07/Mojito-%C2%A9sanneberg-shutterstock.jpg', 'Le mojito est un cocktail à base de rhum, de citron vert et de feuilles de menthe fraîche, né à Cuba ...'),
    new Cocktail('Margarita', 'https://static.750g.com/images/600-600/5479d3dd25b24c4da9882350171a6b12/margarita.jpeg', "C'est un cocktail alcoolisé a base de tequila de cointreau et de jus de citro"),
    new Cocktail('Sour', 'https://www.liquor.com/thmb/w7pTX5SJcpE66OsAECOqJRLR8ko=/720x720/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__11__06162314__amaretto-sour-720x720-recipe-89a34cc23d294def8602ae1054b9f403.jpg', "This tart Hawaiian Stone Sour made with whiskey and pineapple juice will make your mouth pucker")
  ];

  public cocktail: Cocktail;
  constructor() { }

  ngOnInit(): void {
    this.cocktail = this.cocktails[0];
  }

  public updateCocktail(index:number):void{
    this.cocktail = this.cocktails[index];
  }

}
