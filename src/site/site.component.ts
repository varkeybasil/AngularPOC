
import { Component } from '@angular/core';
import {TileService} from "../tile.service";
import { Http } from '@angular/http';


@Component({
    selector: 'app-site',
    templateUrl: './site.component.html',
    styleUrls: ['./site.component.css'],
    providers:[]
  })

  export class SiteComponent {
    data :any[];
    constructor( http: Http)
    {
      http.get("assets/tiles.json").subscribe(response=>{
        console.log(response.json());
        this.data =response.json();
      })
    //  this.data = tileservice.getData();
    //  console.log(this.data);
     
    }
    requestReceived = "Pump Request Received";
    reuestAccepted = "Pump Request Accepted";
    transcationTimeOut = "Transation Timeout";
    transactionInitiated = "Transaction Finalization Intiated";
    transactionFinalized = "Transaction Finalized";
    transactionVoids = "Transaction Voids";
     
    
  }


