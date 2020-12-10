import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class ProductService {

  constructor(private _http: Http) { }
	
  private _albumUrl= new String('../assets/album.json');
  
  getAlbum(id :number) {
	  return this._http.get(_albumUrl);
  }
}
