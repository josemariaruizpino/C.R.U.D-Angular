import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlbumsService } from './../../services/albums.service';

@Component({
  selector: 'app-artists-gallery',
  templateUrl: './artists-gallery.component.html',
  styleUrls: ['./artists-gallery.component.scss']
})
export class ArtistsGalleryComponent implements OnInit {

  artistList: any;

  constructor(private AlbumsService: AlbumsService,private HttpClientModule:HttpClientModule) { }

  ngOnInit(): void {
    this.AlbumsService.getArtists()
    .subscribe((data: any) => {

      this.artistList = data;
      });

    };

    deleteArtist = (id: any) => {
      this.AlbumsService.deleteArtists(id).subscribe()
    
    }
  }