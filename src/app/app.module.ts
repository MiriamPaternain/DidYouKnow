import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { MusicQuestionsComponent } from './music-questions/music-questions.component';
import { GeographyQuestionsComponent } from './geography-questions/geography-questions.component';
import { CartoonQuestionsComponent } from './cartoon-questions/cartoon-questions.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    MusicQuestionsComponent,
    GeographyQuestionsComponent,
    CartoonQuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
