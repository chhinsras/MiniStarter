import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  spin:boolean = false;
  constructor() { }
  url: any = [];
  ngOnInit(): void {
  }
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      this.spin = !this.spin
      reader.onloadend = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
        this.spin = !this.spin
      }
    }
  }
}
