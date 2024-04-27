import { Component } from '@angular/core';
import { SidebarComponent } from './organisms/sidebar/sidebar.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export default class PortfolioComponent {}
