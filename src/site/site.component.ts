import { Component } from '@angular/core';

@Component({
    selector: 'app-site',
    templateUrl: './site.component.html',
    styleUrls: ['./site.component.css']
  })
  export class SiteComponent {
    requestReceived = "Pump Request Received";
    reuestAccepted = "Pump Request Accepted";
    transcationTimeOut = "Transation Timeout";
    transactionInitiated = "Transaction Finalization Intiated";
    transactionFinalized = "Transaction Finalized";
    transactionVoids = "Transaction Voids";
  }
  