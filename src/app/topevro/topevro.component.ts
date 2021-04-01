import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-topevro',
  templateUrl: './topevro.component.html',
  styleUrls: ['./topevro.component.css']
})
export class TopevroComponent {

  @Input()
  audio2: string = '';

  @Input()
  title2: string = '';
}
