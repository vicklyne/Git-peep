import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { GithubService } from './githubs/github.service';
import { FormsModule } from '@angular/forms';


@NgModule({
 declarations: [
   AppComponent,
   GithubComponent
 ],
 imports: [
   BrowserModule,
   HttpClientModule,
   FormsModule
 ],
 providers: [GithubService],
 bootstrap: [AppComponent]
})
export class AppModule { }
