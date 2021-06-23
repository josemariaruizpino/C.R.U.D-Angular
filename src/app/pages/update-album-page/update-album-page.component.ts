import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from './../../services/albums.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-update-album-page',
  templateUrl: './update-album-page.component.html',
  styleUrls: ['./update-album-page.component.scss']
})
export class UpdateAlbumPageComponent implements OnInit {
  
  editAlbum: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private AlbumsService: AlbumsService,
    private router:ActivatedRoute,
    private route:Router,
    // public formControl:FormControl,
    private reactiveFormsModule:ReactiveFormsModule,
    ) {
    }

    ngOnInit(): void {
      this.editAlbum = this.formBuilder.group({
        title: new FormControl(''),
        coverUrl:new FormControl(''),
        year: new FormControl(''),
        genre: new FormControl(''),
      })
    this.AlbumsService.getCurrentAlbum(this.router.snapshot.params._id).subscribe((result)=>{
      
      this.editAlbum.get('title').setValue(result['title']);
      this.editAlbum.get('coverUrl').setValue(result['coverUrl']);
      this.editAlbum.get('year').setValue(result['year']);
      this.editAlbum.get('genre').setValue(result['genre']);
    })
  }

  updateAlbums(){
    this.AlbumsService.updateAlbum(this.router.snapshot.params._id,this.editAlbum.value).subscribe((result)=>
    this.route.navigate(['/albums'])
    // console.log(result,"data updated successfull")
    )}

}
