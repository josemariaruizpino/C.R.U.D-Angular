import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from './../../services/albums.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-albums-page',
  templateUrl: './albums-page.component.html',
  styleUrls: ['./albums-page.component.scss']
})
export class AlbumsPageComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {

  }

}
