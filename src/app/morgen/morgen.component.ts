import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-morgen',
  templateUrl: './morgen.component.html',
  styleUrls: ['./morgen.component.css']
})
export class MorgenComponent{

  moegencard: any[] =[
  {title5:'Yung Trappa & Morgenshtern - Розовое Вино 2',audio5:'Yung Trappa & Morgenshtern - Розовое Вино 2.mp3'},
  {title5:'MORGENSHTERN, Lil Pump - Watafuk',audio5:'morgenshtern-lil-pump-watafuk-mp3.mp3'},
  {title5:'MORGENSHTERN - Клип За 10 Лямов',audio5:'morgenshtern-klip-za-10-lyamov-mp3.mp3'},
  {title5:'MORGENSHTERN - Cristal & МОЁТ',audio5:'morgenshtern-cristal-moyot-mp3-mp3.mp3'},

  ];

  baseAudioPath: string = 'assets/songs/';

  baseTitlePath: string ='';
}
