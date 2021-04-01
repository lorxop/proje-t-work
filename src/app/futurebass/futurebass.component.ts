import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-futurebass',
  templateUrl: './futurebass.component.html',
  styleUrls: ['./futurebass.component.css']
})
export class FuturebassComponent{

  @Input()
  audio7: string = '';

  @Input()
  title7: string = '';

}
