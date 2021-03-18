import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent {

  @Input()
  image: string = '';

  @Input()
  audio: string = '';

  @Output()
  startListening = new EventEmitter();
}
