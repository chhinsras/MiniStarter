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
  // @Output() onLoadFile = new EventEmitter<Upload>();
  @Output() onUploadFile = new EventEmitter<Upload>();

  upload = new Upload();

  constructor() { }

  ngOnInit(): void {
  }

  handleSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url

      this.upload.file = event.target.files[0];
      this.upload.uploadType = this.uploadType;

      // reader.onloadend = (event) => { // called once readAsDataURL is completed
      //   this.url = event.target.result;
      // }
      reader.onloadend = function(){
        var output = document.getElementById('output') as HTMLImageElement;
        output.src = reader.result.toString();
      };
      reader.readAsDataURL(event.target.files[0]);

      // this.onLoadFile.emit(this.upload);
    }


  }

  handleUploadFile(){
    this.onUploadFile.emit(this.upload);
  }

}
