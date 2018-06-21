import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { SiteComponent } from '../site/site.component';
import { Http } from '@angular/http';
import {TileService} from "../tile.service";

@NgModule({
  declarations: [
    AppComponent,
    SiteComponent
  ],
  imports: [
    HttpModule,
    BrowserModule
   ],
  providers: [TileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
