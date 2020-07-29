import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invalidurl',
  templateUrl: './invalidurl.component.html',
  styleUrls: ['./invalidurl.component.css'],
})
export class InvalidurlComponent implements OnInit {
  constructor(private toastr: ToastrService, route: Router) {
    this.toastr.warning('!!!Oops invalid Url!!!');

    route.navigateByUrl('/home');
  }

  ngOnInit(): void {}
}
