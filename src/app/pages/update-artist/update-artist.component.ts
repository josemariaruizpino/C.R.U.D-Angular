import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from './../../services/albums.service';
import { FormBuilder, FormControl,ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-artist',
  templateUrl: './update-artist.component.html',
  styleUrls: ['./update-artist.component.scss']
})
export class UpdateArtistComponent implements OnInit {

  editArtist: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private AlbumsService: AlbumsService,
    private router:ActivatedRoute,
    private route:Router,
    // public formControl:FormControl,
    private reactiveFormsModule:ReactiveFormsModule,

  ) { }

  ngOnInit(): void {
    this.editArtist = this.formBuilder.group({
      name: new FormControl(''),
      photoUrl:new FormControl(''),
      birthdate: new FormControl(''),
      deathDate: new FormControl(''),
    })
  this.AlbumsService.getCurrentArtist(this.router.snapshot.params._id).subscribe((result)=>{
    
    this.editArtist.get('name').setValue(result['name']);
    this.editArtist.get('photoUrl').setValue(result['photoUrl']);
    this.editArtist.get('birthdate').setValue(result['birthdate']);
    this.editArtist.get('deathDate').setValue(result['deathDate']);
  })
}
  updateArtists(){
  this.AlbumsService.updateArtist(this.router.snapshot.params._id,this.editArtist.value).subscribe((result)=>
  this.route.navigate(['/artists'])
  // console.log(result,"data updated successfull")
  )}
}
