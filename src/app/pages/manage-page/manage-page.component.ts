import { AlbumInterface } from './../../components/albums-gallery/models/album-interface';
import { AlbumsService } from './../../services/albums.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage-page',
  templateUrl: './manage-page.component.html',
  styleUrls: ['./manage-page.component.scss'],
})
export class ManagePageComponent implements OnInit {
  public newAlbum = null;
  public submitted: boolean = false;
  albumList: any;
  id: any;
  postAlbum: any;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private AlbumsService: AlbumsService,
    private route:Router,
    private activatedroute: ActivatedRoute,
  ) {
    this.newAlbum = this.formBuilder.group({
      title: [''],
      // artistId:	[''],
      coverUrl: [''],
      year: [''],
      genre: [''],
 
    });

    this.activatedroute.params.subscribe(params => {
      this.id = params['_id']
    })
  }

  ngOnInit() {}

  addAlbums = () => {
    this.newAlbum.value.artistId = this.id;
    if (!this.newAlbum.value.coverUrl) {
      this.newAlbum.value.coverUrl =
        'https://img.favpng.com/18/10/18/error-download-icon-png-favpng-uePgCTmup4vC6U7vC5cJjc4ie_t.jpg';
    }
    this.AlbumsService.addAlbums(this.newAlbum.value).subscribe();
    this.route.navigate(['/albums'])
  };
}