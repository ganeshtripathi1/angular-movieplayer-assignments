import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokeninterceptorService } from './tokeninterceptor.service';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { ApiserviceService } from './apiservice.service';
import { CustomepipePipe } from './customepipe.pipe';
import { InvalidurlComponent } from './invalidurl/invalidurl.component';
@NgModule({
  declarations: [AppComponent, VideoPlayerComponent, PlaylistComponent, CustomepipePipe, InvalidurlComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      closeButton: false,
      newestOnTop: true,
      progressBar: false,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
      timeOut: 4000,
      extendedTimeOut: 1000,
    }),
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokeninterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
