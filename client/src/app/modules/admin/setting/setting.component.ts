import { Component, OnInit } from '@angular/core';
import { MultilingualService } from 'src/app/core/services/multilingual.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})

export class SettingComponent implements OnInit {
  constructor(private translationService : MultilingualService) {

  }
  selected = 'en';
  ngOnInit(): void {
    this.selected = this.translationService.currentLanguage();
  }
  changeLanguage()
  {
    this.translationService.changeLanguage(this.selected);
  }
}
