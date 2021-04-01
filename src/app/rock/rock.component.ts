import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rock',
  templateUrl: './rock.component.html',
  styleUrls: ['./rock.component.css']
})
export class RockComponent{
  @Input()
  audio6: string = '';

  @Input()
  title6: string = '';
}
