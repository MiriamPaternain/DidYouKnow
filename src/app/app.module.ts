import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { MusicQuestionsComponent } from './components/music-questions/music-questions.component';
import { GeographyQuestionsComponent } from './components/geography-questions/geography-questions.component';
import { CartoonQuestionsComponent } from './components/cartoon-questions/cartoon-questions.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    MusicQuestionsComponent,
    GeographyQuestionsComponent,
    CartoonQuestionsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
