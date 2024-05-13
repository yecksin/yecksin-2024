import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SidebarComponent } from '../../components/organisms/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [SidebarComponent, RouterOutlet],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PortfolioComponent {}
