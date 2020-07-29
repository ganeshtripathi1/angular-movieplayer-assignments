import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { InvalidurlComponent } from './invalidurl/invalidurl.component';

const routes: Routes = [
  {
    path: '',
    component: VideoPlayerComponent,
  },
  {
    path: 'playlist',
    component: PlaylistComponent,
  },

  {
    path: 'home',
    component: VideoPlayerComponent,
  },
  {
    path: '**',
    component: InvalidurlComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
