import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css'],
})
export class PlaylistComponent implements OnInit {
  Playlist_Data: any;

  selectedIndex: any;

  list_status: boolean = false;
  list_btn_text: any = 'Hide Playlist';

  constructor(private api: ApiserviceService, private toastr: ToastrService) {
    api
      .getdata('https://valuefy-assignment-x.herokuapp.com/api/getVideos')
      .subscribe(
        (response) => {
          console.log(response);
          this.Playlist_Data = response;
          api.video_url.next(response[0].trailer);
          api.video_name.next(response[0].name);
        },
        (error: Response) => {
          this.toastr.success('Error in API Call');

          // tslint:disable-next-line: triple-equals
          if (error.status == 400) {
            this.toastr.warning('Bad Request'); //if status code return 400 from API
          }
          console.log(error.status);
        }
      );
  }

  ngOnInit(): void {}

  video_selected(link: any, name: any) {
    console.log(link);

    this.api.video_url.next(link);
    this.api.video_name.next(name);
  }

  setRow(index: any) {
    this.selectedIndex = index;
  }

  hide() {
    if (this.list_status) {
      this.list_status = false;

      this.list_btn_text = 'Hide Playlist';
    } else {
      this.list_status = true;

      this.list_btn_text = 'Show Playlist';
    }
  }
}
