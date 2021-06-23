import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AlbumsService } from './../../services/albums.service';
import { AlbumInterface, AlbumResponseInterface } from './models/album-interface';
import { Component, OnInit } from '@angular/core';

const baseUrl = 'http://localhost:3000/';
const albumsUrl = baseUrl + 'albums/all';
const artistsUrl = baseUrl + 'artists/all';
const newAlbumUrl = `${baseUrl}album/`;

@Component({
  selector: 'app-albums-gallery',
  templateUrl: './albums-gallery.component.html',
  styleUrls: ['./albums-gallery.component.scss']
})
export class AlbumsGalleryComponent implements OnInit {

  
  albumList: any;
  http: any;

  constructor(private AlbumsService: AlbumsService, private HttpClientModule:HttpClientModule) {}
  

  ngOnInit() {

    this.AlbumsService.getAlbums()
    .subscribe((data: any) => {

      this.albumList = data;
      console.log(data)
      });

    };

    deleteAlbum = (id: any) => {
      this.AlbumsService.deleteAlbums(id).subscribe()
    
    }
    
  }
