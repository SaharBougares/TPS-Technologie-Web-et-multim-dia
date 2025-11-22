import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Activite1Component } from './activites/activite1/activite1';
import { Activite2Component } from './activites/activite2/articles';
import { Activite3Component } from './activites/activite3/activite3';
import { Activite4Component } from './activites/activite4/activite4';
import { Activite5Component } from './activites/activite5/activite5';
import { Activite6Component } from './activites/activite6/activite6';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    Activite1Component,
    Activite2Component,
    Activite3Component,
    Activite4Component,
    Activite5Component,
    Activite6Component
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  activeTab = 1;

  selectTab(tabNumber: number): void {
    this.activeTab = tabNumber;
  }
}
