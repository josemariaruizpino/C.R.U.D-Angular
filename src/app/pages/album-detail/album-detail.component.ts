import { HttpClient } from '@angular/common/http';
import { AlbumsService } from './../../services/albums.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.scss'],
})
export class AlbumDetailComponent implements OnInit {
  album: any = {};

  constructor(
    private http: HttpClient,
    private router: ActivatedRoute,
    private albumsService: AlbumsService
  ) {}

  ngOnInit(): void {
    this.albumsService
      .getCurrentAlbum(this.router.snapshot.params._id)
      .subscribe((result) => {
        this.album = result;
      });
  }
}
