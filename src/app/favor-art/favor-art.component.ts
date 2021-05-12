import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favor-art',
  templateUrl: './favor-art.component.html',
  styleUrls: ['./favor-art.component.css']
})
export class FavorArtComponent {

  @Input()
  image: string = '';

  @Input()
  audio: string = '';

  @Output()
  removeFromFavorites = new EventEmitter();

}
