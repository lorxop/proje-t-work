import { Component, Input, OnInit } from '@angular/core';

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

  @Input()
  image2: string = '';

  @Input()
  audio2: string = '';

}
