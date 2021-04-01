import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-popartist',
  templateUrl: './popartist.component.html',
  styleUrls: ['./popartist.component.css']
})
export class PopartistComponent{

  @Input()
  audio: string = '';

  @Input()
  title: string = '';

}
