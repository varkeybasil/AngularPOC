import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class TileService {

  constructor(private http:Http) { }


  createHeader(headers: Headers) {
    headers.append("Content-Type", 'application/json')
  }
  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  getData() {
    let headers = new Headers();
    //this.createHeader(headers);
    return this.http.get("assets/tiles.json", {
      headers: headers
    }).map(this.extractData).catch(this.handleError);
    //return "Hi";
  }

  private handleError (error: Response | any) {
  
   return Observable.throw(error);
}

}