import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-morgencard',
  templateUrl: './morgencard.component.html',
  styleUrls: ['./morgencard.component.css']
})
export class MorgencardComponent{
  @Input()
  audio5: string = '';

  @Input()
  title5: string = '';

}
