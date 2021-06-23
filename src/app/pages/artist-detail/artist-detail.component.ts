import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AlbumsService } from './../../services/albums.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.scss']
})
export class ArtistDetailComponent implements OnInit {

  artist: any = {};

  constructor(
    private http: HttpClient,
    private router: ActivatedRoute
    ,private albumsService:AlbumsService
    ) { }

  ngOnInit(): void {

    this.albumsService.getCurrentArtist(this.router.snapshot.params._id).subscribe((result)=>{
      this.artist=result
  })
  }

}
