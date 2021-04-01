import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent{

  popartist: any[] = [
    {title:'Миа Бойка feat. T-Killah - Лепесток',audio:'Лепесток.mp3'},
    {title:'Ваня Дмитриенко - Венера-Юпитер',audio:'Венера-Юпитер.mp3'},
    {title:'MONATIK & Вера Брежнева - ВЕЧЕРиНОЧКА',audio:'ВЕЧЕРиНОЧКА.mp3'},
    {title:'Blackbear - hot girl bummer',audio:'Hot-Girl-Bummer.mp3'},
    {title:'UncleFlexxx - Camry 3.5',audio:'Camry3.5.mp3'},
    {title:'Канги - Эйя',audio:'Канги - Эйя.mp3'},
    {title:'MORGENSHTERN & Yung Trappa - FAMILY',audio:'MORGENSHTERN, Yung Trappa - FAMILY.mp3'},
  ];

   topevro: any[] = [
     {title2:'ZAYN - Vibez',audio2:'zayn-vibez.mp3'},
     {title2:'VITAS FT. NAPPY ROOTS - "Roll With the Beat"',audio2:'vitas-roll_with_the_beat.mp3'},
     {title2:'Ed Sheeran - Afterglow',audio2:'Ed Sheeran-Afterglow.mp3'},
     {title2:'Harry Styles - Golden',audio2:'Harry Styles - Golden.mp3'},
     {title2:'Harry Styles - Watermelon Sugar',audio2:'Harry Styles - Watermelon Sugar.mp3'},
     {title2:'3 Sud Est, Andra - Jumatatea Mea Mai Buna',audio2:'3-sud-est-andra-jumatatea-mea-mai-buna.mp3'},
     {title2:'Dua Lipa - We`re Good',audio2:'Dua Lipa - We`re Good.mp3'}
   ];

   topusa: any[] = [
     {title3:'Justin Bieber - Peaches ft. Daniel Caesar, Giveon',audio3:'Justin Bieber - Peaches (feat. Daniel Caesar Giveon).mp3'},
     {title3:'Bruno Mars & Anderson - Leave the door open',audio3:'bruno-mars-anderson-paak-feat-silk-sonic-leave-the-door-open.mp3'},
     {title3:'The Weeknd - Save Your Tears',audio3:'The_Weeknd_-_Save_Your_Tears_.mp3'},
     {title3:'Olivia Rodrigo - drivers license',audio3:'olivia-rodrigo_-_drivers-license.mp3'},
     {title3:'CJ feat. French Montana & Rowdy Rebel - Whoopty NYC',audio3:'CJ feat. French Montana & Rowdy Rebel - Whoopty NYC.mp3'},
     {title3:'YBN Nahmir, 21 Savage - Opp Stoppa',audio3:'YBN Nahmir, 21 Savage - Opp Stoppa.mp3'},
     {title3:'Joshua Bassett - Telling Myself',audio3:'Joshua Bassett - Telling Myself.mp3'},


   ];

  baseAudioPath: string = 'assets/songs/';

  baseTitlePath: string ='';
}
