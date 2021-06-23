import { UpdateArtistComponent } from './pages/update-artist/update-artist.component';
import { CreateArtistComponent } from './pages/create-artist/create-artist.component';
import { UpdateAlbumPageComponent } from './pages/update-album-page/update-album-page.component';
import { AlbumDetailComponent } from './pages/album-detail/album-detail.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AlbumsPageComponent } from './pages/albums-page/albums-page.component';
import { ArtistsPageComponent} from './pages/artists-page/artists-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagePageComponent } from './pages/manage-page/manage-page.component';
import { ArtistDetailComponent } from './pages/artist-detail/artist-detail.component';



const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'artists',component: ArtistsPageComponent},
  {path: 'albums',component: AlbumsPageComponent},
  {path: 'manage',component: ManagePageComponent},
  {path: 'album/:_id',component: AlbumDetailComponent},
  {path: 'update/:_id', component: UpdateAlbumPageComponent},
  {path: 'new-artist', component: CreateArtistComponent},
  {path: 'update-artist/:_id', component: UpdateArtistComponent},
  {path: 'artist/:_id', component: ArtistDetailComponent},
  {path: 'artist/:_id/add-album', component: ManagePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
