import { AlbumsService } from './services/albums.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumsGalleryComponent } from './components/albums-gallery/albums-gallery.component';
import { MenuComponent } from './components/menu/menu.component';
import { AlbumsPageComponent } from './pages/albums-page/albums-page.component';
import { ArtistsPageComponent } from './pages/artists-page/artists-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArtistsGalleryComponent } from './components/artists-gallery/artists-gallery.component';
import { ManagePageComponent } from './pages/manage-page/manage-page.component';
import { ReactiveFormsModule} from '@angular/forms';
import { SliderAlbumsComponent } from './components/slider-albums/slider-albums.component';
import { AlbumDetailComponent } from './pages/album-detail/album-detail.component';
import { UpdateAlbumPageComponent } from './pages/update-album-page/update-album-page.component';
import { CreateArtistComponent } from './pages/create-artist/create-artist.component';
import { UpdateArtistComponent } from './pages/update-artist/update-artist.component';
import { ArtistDetailComponent } from './pages/artist-detail/artist-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SliderArtistComponent } from './components/slider-artist/slider-artist.component';




@NgModule({
  declarations: [
    AppComponent,
    AlbumsGalleryComponent,
    MenuComponent,
    AlbumsPageComponent,
    ArtistsPageComponent,
    HomePageComponent,
    ArtistsGalleryComponent,
    ManagePageComponent,
    SliderAlbumsComponent,
    AlbumDetailComponent,
    UpdateAlbumPageComponent,
    CreateArtistComponent,
    UpdateArtistComponent,
    ArtistDetailComponent,
    SliderArtistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [AlbumsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
