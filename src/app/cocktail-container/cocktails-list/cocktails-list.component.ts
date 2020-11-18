import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cocktail } from '../../shared/models/cocktail.model';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.css']
})

export class CocktailsListComponent implements OnInit {
  @Input() cocktails: Cocktail[];
  @Output() pick: EventEmitter<number> = new EventEmitter<number>();
  public activeCocktail: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  pickCockail(index: number):void{
    this.activeCocktail = index;
    this.pick.emit(index);
  }
}
