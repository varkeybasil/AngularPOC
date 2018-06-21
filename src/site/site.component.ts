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
    data :any;
    constructor( private tileservice :TileService)
    {
     this.data = tileservice.getData();
     
    }
    requestReceived = "Pump Request Received";
    reuestAccepted = "Pump Request Accepted";
    transcationTimeOut = "Transation Timeout";
    transactionInitiated = "Transaction Finalization Intiated";
    transactionFinalized = "Transaction Finalized";
    transactionVoids = "Transaction Voids";
     
    
  }

  