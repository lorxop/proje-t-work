import { Component, OnInit } from '@angular/core';
import { FavoritesServices } from '../services/favorites.services';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit  {



  artists: any[] = [];


  baseImgPath: string = 'assets/img/';
  baseAudioPath: string = 'assets/songs/';

  constructor(private favoritesServices: FavoritesServices) {}

  ngOnInit() {
    this.artists = this.favoritesServices.favorites;
  }

  removeFromFavorites(img: string) {
    this.favoritesServices.removeFromFavorites(img);
  }

}
