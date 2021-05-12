import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class FavoritesServices {
 
    favorites: Array<any> = [];

    addToFavorites(artist: any) {
      const index = this.favorites.findIndex(el => el.image === artist.image);
      if(index === -1) {
        this.favorites.push(artist);
      }     
    }
    
    removeFromFavorites(img: string) {
      const index = this.favorites.findIndex(el => el.image === img);
      this.favorites.splice(index,1);
    }



}