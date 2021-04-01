import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent{

rap: any[] =[
{title5:'Obladaet—SHINOBI',audio5:'Obladaet-SHINOBI.mp3'},
{title5:'Face-Бизнес',audio5:'Бизнес.mp3'},
{title5:'Thomas Mraz - Прощай',audio5:'Thomas Mraz - Прощай.mp3'},
{title5:'Dava feat. Серёга - Черный Бумер',audio5:'Dava feat. Серёга - Черный Бумер.mp3'},


];

rock: any[] = [
 {title6:'AC/DC - Highway to Hell',audio6:'AC_DC_-_Highway_to_Hell.mp3'},
 {title6:'Король и Шут - Лесник',audio6:'Король и Шут - Лесник.mp3'},
 {title6:'Queen - We Will Rock You ',audio6:'queen_-_we-will-rock-you.mp3'},
 {title6:'Би-2 - Компромисс',audio6:'Би-2 - Компромисс.mp3'},

];
futurebass: any[] =[
{title7:'Skrillex & Damian Marley - Make It Bun Dem',audio7:'Skrillex & Damian Marley - Make It Bun Dem.mp3'},
{title7:'Макс Корж - За Тобой',audio7:'Макс Корж - За Тобой.mp3'},
{title7:'Lindsey Stirling - Crystallize',audio7:'Lindsey Stirling - Crystallize.mp3'},
{title7:'Skrillex feat. Ragga Twins - Ragga Bomb',audio7:'Skrillex feat. Ragga Twins - Ragga Bomb.mp3'},

];

reggae: any[] = [
{title9:'MiyaGi feat. TumaniYO - Jamm',audio9:'MiyaGi feat. TumaniYO - Jamm.mp3'},
{title9:'Bob Marley - Three Little Birds',audio9:'Bob Marley - Three Little Birds.mp3'},
{title9:'Maxi Priest - Close To You',audio9:'Maxi Priest - Close To You.mp3'},
{title9:'5`nizza - Митя',audio9:'5`nizza - Митя.mp3'},


];

  baseAudioPath: string = 'assets/songs/';

  baseTitlePath: string ='';

}
