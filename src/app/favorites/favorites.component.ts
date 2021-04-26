import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent  {

  artists: any[] = [
    { class:'lol', image: 'pizz.png', audio: 'pizz.mp3'},];

  artists2: any[] = [
    {image2: 'maks.png', audio2: 'maks.mp3'},
  ];

  baseImgPath: string = 'assets/img/';
  baseAudioPath: string = 'assets/songs/';

}
