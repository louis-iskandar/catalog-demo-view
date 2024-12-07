import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppComponent} from './app.component';
import {AppService} from './app.service';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
