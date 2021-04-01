import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenreComponent } from './genre/genre.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { PopularComponent } from './popular/popular.component';
import { ProfileComponent } from './profile/profile.component';
import { ArtistComponent } from './artist/artist.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PopartistComponent } from './popartist/popartist.component';
import { TopevroComponent } from './topevro/topevro.component';
import { TopusaComponent } from './topusa/topusa.component';
import {MatCardModule} from '@angular/material/card';
import { RapComponent } from './rap/rap.component';
import { RockComponent } from './rock/rock.component';
import { FuturebassComponent } from './futurebass/futurebass.component';
import { ReggaeComponent } from './reggae/reggae.component';
import { MorgenComponent } from './morgen/morgen.component';
import { MorgencardComponent } from './morgencard/morgencard.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';


const appRoutes: Routes = [
  {path:'', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'popular', component: PopularComponent},
  {path: 'genre', component: GenreComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'Morgenshtern', component: MorgenComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    GenreComponent,
    HomeComponent,
    MenuComponent,
    PopularComponent,
    ProfileComponent,
    ArtistComponent,
    PopartistComponent,
    TopevroComponent,
    TopusaComponent,
    RapComponent,
    RockComponent,
    FuturebassComponent,
    ReggaeComponent,
    MorgenComponent,
    MorgencardComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    MatCardModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
