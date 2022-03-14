import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { LocalStorageService } from './core/services/local-storage.service';
import { MultilingualService } from './core/services/multilingual.service';
import { ThemeService } from './core/services/theme.service';
import { AccountService } from './core/services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  themeVariant: string = '';
  darkModeIcon: string = '';
  constructor(private accountService: AccountService, private translationService: MultilingualService, private themeService: ThemeService, private overlay: OverlayContainer) {
  }

  ngOnInit(): void {
    this.loadCurrentUser();
    this.loadDefaults();
  }

  loadDefaults() {
    this.translationService.loadDefaultLanguage();
    this.themeService.setThemeFromLocalStorage();
  }

  loadCurrentUser() {
    this.accountService.loadCurrentUser()
      .subscribe(() => {
      }, error => {
        console.log(error);
      });
  }
}
