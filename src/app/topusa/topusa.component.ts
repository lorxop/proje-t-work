import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-topusa',
  templateUrl: './topusa.component.html',
  styleUrls: ['./topusa.component.css']
})
export class TopusaComponent{

  @Input()
  audio3: string = '';

  @Input()
  title3: string = '';

}
