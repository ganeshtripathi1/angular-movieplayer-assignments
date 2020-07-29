import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css'],
})
export class VideoPlayerComponent implements OnInit {
  video: any;
  name: any;
  autoplaystatus: boolean = false;
  text: string = 'Start Autoplay Mode';
  hide: boolean = true;

  constructor(
    private api: ApiserviceService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.api.video_url.subscribe((val) => {
      if (this.autoplaystatus) {
        let demo: string = val + '?autoplay=1';
        this.video = this.sanitizer.bypassSecurityTrustResourceUrl(demo);
      } else {
        this.video = this.sanitizer.bypassSecurityTrustResourceUrl(val);
      }

      console.log(this.video);
    });

    this.api.video_name.subscribe((val) => {
      this.name = val;
    });
  }

  autostart() {
    if (this.autoplaystatus) {
      this.autoplaystatus = false;
      this.text = 'Start Autoplay Mode';
    } else {
      this.autoplaystatus = true;
      this.text = 'Off Autoplay Mode';
    }
  }

  hidemsg() {
    this.hide = false;
  }
}
