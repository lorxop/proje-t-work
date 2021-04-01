import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reggae',
  templateUrl: './reggae.component.html',
  styleUrls: ['./reggae.component.css']
})
export class ReggaeComponent{

  @Input()
  audio9: string = '';

  @Input()
  title9: string = '';
}
