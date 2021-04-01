import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rap',
  templateUrl: './rap.component.html',
  styleUrls: ['./rap.component.css']
})
export class RapComponent{

  @Input()
  audio5: string = '';

  @Input()
  title5: string = '';

}
