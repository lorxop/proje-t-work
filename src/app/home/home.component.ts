import { Component } from '@angular/core';
import { Artist } from '../types/artist.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  artists: Artist[] = [
    {image: 'pizz.png', audio: 'pizz.mp3'},
    {image: 'maks.png', audio: 'maks.mp3', id: 12002},
    {image: 'morgen.png', audio: 'morgen.mp3'},
    {image: 'mot.png', audio: 'mot.mp3'}
  ];

  baseImgPath: string = 'assets/img/';
  baseAudioPath: string = 'assets/songs/';

  onStartListening(artist: Artist) {
    // this.increaseArtistPopularity(artist);
  }
}
