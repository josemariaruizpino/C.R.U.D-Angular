import { Component, OnInit } from '@angular/core';
import { AlbumsService } from './../../services/albums.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-artist',
  templateUrl: './create-artist.component.html',
  styleUrls: ['./create-artist.component.scss']
})
export class CreateArtistComponent implements OnInit {
  
  public newArtist = null;
  public submitted: boolean = false;
  artistList: any;
  id: any;
  postArtist: any;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private AlbumsService: AlbumsService,
    private route:Router,
    ) {
      this.newArtist = this.formBuilder.group({
        name: [''],
        photoUrl: [''],
        birthdate: [''],
        deathDate: [''],
   
      });
     }

  ngOnInit(): void {
  }

  addArtist = () => {
    this.newArtist.value.artistId = this.id;
    if (!this.newArtist.value.photoUrl) {
      this.newArtist.value.photoUrl =
        'https://img.favpng.com/18/10/18/error-download-icon-png-favpng-uePgCTmup4vC6U7vC5cJjc4ie_t.jpg';
    }
    this.AlbumsService.addArtists(this.newArtist.value).subscribe();
    this.route.navigate(['/artists'])
  };
}
