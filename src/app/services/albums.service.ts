import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { title } from 'process';

const baseUrl = 'http://localhost:3000/';
const albumsUrl = baseUrl + 'albums/all';
const artistsUrl = baseUrl + 'artists/all';
const newAlbumUrl = `${baseUrl}album/`;
const newArtistUrl = `${baseUrl}artist/`;



@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http: HttpClient) { }
 
  getAlbums() {
    return this.http.get(albumsUrl);
  }
  
  getArtists() {
    return this.http.get(artistsUrl);
  }
  
  addAlbums = (newAlbum: any) => {
    return this.http.post(newAlbumUrl, newAlbum)
    
  }
  
  addArtists = (newArtist: any) => {
    return this.http.post(newArtistUrl, newArtist)
    
  }
  
  getAlbum() {
    return this.http.get(`${baseUrl}album/id`);
  }
  
  getCurrentAlbum(id){
    return this.http.get(`${baseUrl}album/${id}`)
  }
  
  updateAlbum(id,data){
    return this.http.put(`${baseUrl}album/${id}`,data)
  }
  
  deleteAlbums = (id: any) => {
    return this.http.delete(`${baseUrl}album/${id}`)
  
  }

  deleteArtists = (id: any) => {
    return this.http.delete(`${baseUrl}artist/${id}`)
  
  }

  getCurrentArtist(id){
    return this.http.get(`${baseUrl}artist/${id}`)
  }

  updateArtist(id,data){
    return this.http.put(`${baseUrl}artist/${id}`,data)
  }
}
