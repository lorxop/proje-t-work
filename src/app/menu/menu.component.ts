import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    
  @ViewChild('menu') 
  menuElement:any;

  isOpened:boolean = false;


  constructor(private renderer:Renderer2) {

  }

  ngOnInit(): void {
  }
  toggleMenu(event:Event):void {
    event.preventDefault();
     if(this.isOpened){
       this.renderer.removeClass(this.menuElement.nativeElement,'active');
       this.isOpened = !this.isOpened;
     }
     else{
       this.renderer.addClass(this.menuElement.nativeElement,'active');
       this.isOpened = !this.isOpened;
     }

  }
}
