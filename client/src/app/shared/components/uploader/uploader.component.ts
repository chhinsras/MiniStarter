import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Upload, UploadType } from 'src/app/shared/models/upload';;

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit {
  @Input() url: any;
  @Input() uploadType: UploadType;
  @Output() onLoadFile = new EventEmitter<Upload>();

  upload = new Upload();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url

      this.upload.fileName = event.target.files[0].name.split('.').shift()
      this.upload.extension = event.target.files[0].name.split('.').pop();
      this.upload.uploadType = this.uploadType;

      reader.onloadend = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
        this.upload.data = event.target.result;
      }

      this.onLoadFile.emit(this.upload);
    }
  }

}
