import { Component } from '@angular/core';
import {FavoritesServices} from '../services/favorites.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  artists: any[] = [
    {image: 'pizz.png', audio: 'pizz.mp3'},
    {image: 'maks.png', audio: 'maks.mp3'},
    {image: 'morgen.png', audio: 'morgen.mp3'},
    {image: 'mot.png', audio: 'mot.mp3'}
  ];

  baseImgPath: string = 'assets/img/';
  baseAudioPath: string = 'assets/songs/';
  
  constructor(private favoritesServices: FavoritesServices) {}
  
  addToFavorites(artist:any) {
    
    console.log(artist);

    this.favoritesServices.addToFavorites(artist);
  }

}
